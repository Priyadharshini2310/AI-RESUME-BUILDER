import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { AIChatSession } from './../../../../../service/AIModal';

const prompt = `Job Title: {jobTitle}, Generate a valid JSON array with job summaries for 3 experience levels (Senior, Mid Level, and Fresher). Each entry should contain "experience_level" and "summary" fields. Do not include any markdown, code blocks, or explanations. Only return raw JSON.`;
function Summery({ enabledNext }) {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [summery, setSummery] = useState();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState();
    useEffect(() => {
        summery && setResumeInfo({
            ...resumeInfo,
            summery: summery
        })
    }, [summery])

    const GenerateSummeryFromAI = async () => {
        setLoading(true)
        const PROMPT = prompt.replace('{jobTitle}', resumeInfo?.jobTitle);
        console.log(PROMPT);
        try {
            const result = await AIChatSession.sendMessage(PROMPT);
            console.log("Raw result from AI:", result.response);
    
            // Clean the response by removing code fences (```json and ```)
            let rawText = result.response.text();
            let cleanedText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    
            console.log("Cleaned JSON text:", cleanedText);
    
            // Parse the cleaned response into JSON
            const parsedResponse = JSON.parse(cleanedText); 
    
            // Set the parsed JSON response into state
            setAiGenerateSummeryList(parsedResponse);
    
        } catch (error) {
            console.error("Error parsing JSON:", error.message);
        } finally {
            setLoading(false);
        }
    }

    const onSave = (e) => {
        e.preventDefault();

        setLoading(true)
        const data = {
            data: {
                summery: summery
            }
        }
        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(resp => {
            console.log("response data after summery", resp);
            enabledNext(true);
            setLoading(false);
            toast("Details updated")
        }, (error) => {
            setLoading(false);
        })
    }
    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-blue-600 border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Summery</h2>
                <p>Add Summery for your job title</p>

                <form className='mt-7' onSubmit={onSave}>
                    <div className='flex justify-between items-end'>
                        <label>Add Summery</label>
                        <Button variant="outline" onClick={() => GenerateSummeryFromAI()}
                            type="button" size="sm" className="border-blue-500 text-blue-500 flex gap-2">
                            <Brain className='h-4 w-4' />  Generate from AI</Button>
                    </div>
                    <Textarea className="mt-5" required
                        value={summery}
                        defaultValue={summery ? summery : resumeInfo?.summery}
                        onChange={(e) => setSummery(e.target.value)}
                    />
                    <div className='mt-2 flex justify-end'>
                        <Button type="submit" className='bg-blue-500 hover:bg-blue-600'
                            disabled={loading}>
                            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                        </Button>
                    </div>
                </form>
            </div>


            {aiGeneratedSummeryList && <div className='my-5'>
                <h2 className='font-bold text-lg'>Suggestions</h2>
                {aiGeneratedSummeryList?.map((item, index) => (
                    <div key={index}
                        onClick={() => setSummery(item?.summary)}
                        className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'>
                        <h2 className='font-bold my-1 text-blue-500'>Level: {item?.experience_level}</h2>
                        <p>{item?.summary}</p>
                    </div>
                ))}
            </div>}

        </div>
    )
}

export default Summery