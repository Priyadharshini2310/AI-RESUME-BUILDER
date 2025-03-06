import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { LoaderCircle } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';

function PersonalDetail({ enabledNext }) {

    const params = useParams();
    const navigate = useNavigate(); // Navigation hook
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

    const [formData, setFormData] = useState();
    const [loading, setLoading] = useState(false);
    // Check if resumeId is available, and fetch data accordingly
    useEffect(() => {
        if (!params?.resumeId) {
            console.error("Resume ID is undefined, redirecting...");
            navigate('/dashboard'); // Redirect to a different page or show an error
        } else {
            // Fetch the resume details by resumeId (UUID or numeric id based on your setup)
            GlobalApi.GetResumeById(params.resumeId).then((resp) => {
                const resumeDetails = resp.data.data.attributes;
                setFormData(resumeDetails); // Set form data with fetched details
                setResumeInfo(resumeDetails); // Set context with fetched details
            }).catch((error) => {
                console.error("Error fetching resume details:", error);
            });
        }
    }, [params?.resumeId, navigate, setResumeInfo]);

    const handleInputChange = (e) => {
        enabledNext(false)
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
        setResumeInfo({
            ...resumeInfo,
            [name]: value
        })
    }

    const onSave = (e) => {
        e.preventDefault();
        setLoading(true)
        const data = {
            data: formData
        }
        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(resp => {
            console.log(resp);
            enabledNext(true);
            setLoading(false);
            toast("Details updated")
        }, (error) => {
            setLoading(false);
        })

    }
    return (
        <div className='p-5 shadow-lg rounded-lg border-blue-600 border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Personal Detail</h2>
            <p>Get Started with the basic information</p>

            <form onSubmit={onSave}>
                <div className='grid grid-cols-2 mt-5 gap-3'>
                    <div>
                        <label className='text-sm'>First Name</label>
                        <Input name="firstName" defaultValue={resumeInfo?.firstName} required onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className='text-sm'>Last Name</label>
                        <Input name="lastName" required onChange={handleInputChange}
                            defaultValue={resumeInfo?.lastName} />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Job Title</label>
                        <Input name="jobTitle" required
                            defaultValue={resumeInfo?.jobTitle}
                            onChange={handleInputChange} />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Address</label>
                        <Input name="address" required
                            defaultValue={resumeInfo?.address}
                            onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className='text-sm'>Phone</label>
                        <Input
                            name="phone"
                            required
                            defaultValue={resumeInfo?.phone}
                            onChange={handleInputChange}
                            onInput={(e) => {
                                const value = e.target.value;
                                e.target.value = value.replace(/[^0-9]/g, '').slice(0, 10);
                            }}
                        />
                    </div>

                    <div>
                        <label className='text-sm'>Email</label>
                        <Input name="email" required
                            defaultValue={resumeInfo?.email}
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div className='mt-3 flex justify-end'>
                    <Button type="submit" className='bg-blue-500 hover:bg-blue-600'
                        disabled={loading}>
                        {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetail