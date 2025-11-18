"use client"
import * as Icons from '@/components/icons';
import { domainAreas } from '@/lib/data';
import ServiceCard from './Services/Service';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Database: Icons.Database,
    Workflow: Icons.Workflow,
    Zap: Icons.Zap,
    Code: Icons.Code,
    Figma: Icons.Figma,
    TrendingUp: Icons.TrendingUp,
};

const Service = () => {

    return (
        <div className={`bg-white relative z-30 py-12 lg:py-24`}>
            <div className="px-4">
                <div className="max-w-7xl mx-auto text-center space-y-6 mb-6">
                    <h2 className="text-4xl md:text-5xl text-black font-manrope font-extrabold uppercase">
                        Areas of Ownership
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-agdasima">
                        Leading cross-functional teams across the full product lifecycle.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-7xl mx-auto'>
                {
                    domainAreas.map((domain, i) => {
                        const IconComponent = iconMap[domain.icon] || Icons.Code;
                        return <ServiceCard
                            key={`domain_${i}`}
                            title={domain.title}
                            copy={domain.blurb}
                            icon={<IconComponent className="w-12 h-12" />}
                            domain={domain.domain}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Service