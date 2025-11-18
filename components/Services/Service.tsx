"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import './service.css';

interface ServiceCardProps {
    title: string;
    copy: string;
    icon: React.ReactNode;
    domain: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, copy, icon, domain }) => {

    const domainMap: Record<string, string> = {
        'data': 'data',
        'automation': 'ai',
        'poc': 'web',
        'web': 'web',
        'ux': 'uiux',
        'business': 'all'
    };
    
    const projectDomain = domainMap[domain] || 'all';
    return (
        <div className="cardContainer">
            <motion.div
                className="card bg-white border border-slate-500 rounded-[4rem] flex flex-col justify-between"
            >
                <div className="flex items-center gap-4">
                    {icon && (
                        <div className="text-emerald-600">
                            {icon}
                        </div>
                    )}
                </div>
                <div className='flex flex-col justify-between w-full gap-6'>
                    <div className='w-full space-y-4'>
                        <h2 className='font-manrope text-black text-3xl font-bold uppercase'>{title}</h2>
                        <div className="body">
                            <div className="description">
                                <p className='text-slate-600 font-agdasima text-lg md:text-xl'>{copy}</p>
                            </div>
                        </div>
                    </div>

                    <Link 
                        href={`/projects?domain=${projectDomain}`} 
                        className='circle-button bg-primary cursor-pointer font-manrope text-white font-bold text-sm rounded-full py-4 flex items-center justify-center'
                    >
                        <p className="relative z-10 mx-auto text-center">
                            Show Projects
                        </p>
                        <span className="circle-bg" />
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default ServiceCard