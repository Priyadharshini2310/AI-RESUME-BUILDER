import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'
import { AIChatSession } from './../../../../service/AIModal';
import { toast } from 'sonner';
const PROMPT='position title: {positionTitle}. Depends on the position title, provide 5-7 bullet points for my experience in a resume, give me result in html format.'
function RichTextEditor({onRichTextEditorChange,index,defaultValue}) {
    const [value,setValue]=useState(defaultValue);
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const [loading,setLoading]=useState(false);
    // const GenerateSummeryFromAI=async()=>{
     
    //   if(!resumeInfo?.Experience[index]?.title)
    //   {
    //     toast('Please Add Position Title');
    //     return ;
    //   }
    //   setLoading(true)
    //   const prompt = PROMPT.replace('{positionTitle}', resumeInfo.Experience[index].title);

    //     try {
    //         const result = await AIChatSession.sendMessage(prompt);
    //         const resp = result.response.text(); // Await the async text
    //         console.log(resp);
    //         setValue(resp.replace('[','').replace(']',''));
    //     } catch (error) {
    //         console.error('Error generating summary from AI:', error);
    //         toast('Failed to generate summary from AI.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const GenerateSummeryFromAI = async () => {
      if (!resumeInfo?.Experience[index]?.title) {
        toast('Please Add Position Title');
        return;
      }
      setLoading(true);
      const prompt = PROMPT.replace('{positionTitle}', resumeInfo.Experience[index].title);
    
      try {
        const result = await AIChatSession.sendMessage(prompt);
        const resp = await result.response.text(); // Await the async text
    
        let cleanResp = resp; // Initialize as raw response
    
        try {
          // Attempt to parse JSON response
          const parsedResp = JSON.parse(resp);
    
          // Check if bulletPoints is a string or array and extract it
          if (parsedResp.bulletPoints) {
            if (Array.isArray(parsedResp.bulletPoints)) {
              cleanResp = parsedResp.bulletPoints.join('\n'); // Join array into a string
            } else {
              cleanResp = parsedResp.bulletPoints; // Use as-is if it's already a string
            }
          } else {
            // Fallback: Combine all object values if bulletPoints is missing
            cleanResp = Object.values(parsedResp).join('\n');
          }
        } catch (err) {
          console.warn("Failed to parse JSON, using raw response:", err);
        }
    
        // Ensure cleanResp is a string before applying string methods
        if (typeof cleanResp !== 'string') {
          cleanResp = JSON.stringify(cleanResp); // Convert to string if not already
        }
    
        // Clean up the response
        cleanResp = cleanResp
          .replace(/undefined/g, '') // Remove "undefined"
          .trim(); // Trim leading/trailing spaces
    
        // Set the sanitized value
        setValue(cleanResp);
      } catch (error) {
        console.error('Error generating summary from AI:', error);
        toast('Failed to generate summary from AI.');
      } finally {
        setLoading(false);
      }
    };
    

  
    return (
    <div>
      <div className='flex justify-between my-2'>
        <label className='text-xs'>Summery</label>
        <Button variant="outline" size="sm" 
        onClick={GenerateSummeryFromAI}
        disabled={loading}
        className="flex gap-2 border-blue text-blue-500">
          {loading?
          <LoaderCircle className='animate-spin'/>:  
          <>
           <Brain className='h-4 w-4'/> Generate from AI 
           </>
        }
         </Button>
      </div>
    <EditorProvider>
      <Editor value={value} onChange={(e)=>{
        setValue(e.target.value);
        onRichTextEditorChange(e)
      }}>
         <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
         
         
        </Toolbar>
      </Editor>
      </EditorProvider>
    </div>
  )
}

export default RichTextEditor