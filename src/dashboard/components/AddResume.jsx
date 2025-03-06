import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'



function AddResume() {

    const [openDialog,setOpenDialog]=useState(false)
    const [resumeTitle,setResumeTitle]=useState();
    const {user}=useUser();
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const onCreate = async () => {
        setLoading(true);
        const uuid = uuidv4(); // Generate a unique UUID for the resume
        const data = {
            data: {
                title: resumeTitle,
                resumeId: uuid,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName,
            },
        };

        // Make API call to create a new resume
        GlobalApi.CreateNewResume(data).then(resp => {
            console.log("API Response:", resp); // Log the entire response for debugging

            // Extract the resumeId from the attributes
            const resumeId = resp.data.data?.id; // Fetch resumeId from the attributes

            console.log("Created Resume UUID: ", resumeId); // Log resumeId to check if it's present
            
            // Check if the resumeId is valid before navigating
            if (resumeId) {
                console.log("Navigating to the edit page with resumeId:", resumeId);
                // Navigate to the resume's edit page if resumeId is valid
                navigate(`/dashboard/resume/${resumeId}/edit`);
            } else {
                console.error("Error: Resume UUID is invalid or missing.");
                toast.error("Error: Failed to create resume. Please try again.");
            }

            setLoading(false);
        }, error => {
            setLoading(false);
            console.error("Error creating resume:", error);
            toast.error("An error occurred while creating the resume. Please try again.");
        });
    };
  return (
    <div >
        <div className='p-14 py-24 border bg-gradient-to-b
          from-blue-100 via-blue-200 to-blue-300
        items-center flex 
        justify-center
        rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed'
        onClick={()=>setOpenDialog(true)}
        >
            <PlusSquare  />
        </div>

        <Dialog open={openDialog} onOpenChange={(isOpen) => setOpenDialog(isOpen)}>
       
        <DialogContent className="bg-blue-100/10 backdrop-blur-3xl">
            <DialogHeader>
            <DialogTitle className="font-extrabold">Create New Resume</DialogTitle>
            <DialogDescription>
                <p className='text-blue-400'>Add a title for your new resume</p>
                <Input className="my-2" 
                placeholder="Ex.Full Stack resume"
                onChange={(e)=>setResumeTitle(e.target.value)}
                />
            </DialogDescription>
            <div className='flex justify-end gap-5'>
                <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
                <Button className="bg-blue-500 hover:bg-blue-600"
                    disabled={!resumeTitle||loading}
                onClick={()=>onCreate()}>
                    {loading?
                    <Loader2 className='animate-spin' /> :'Create'   
                }
                    </Button>
            </div>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default AddResume