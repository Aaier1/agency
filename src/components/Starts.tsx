import React from 'react'
import { BarChart, Star, Users, CheckCircle2 } from 'lucide-react'

// Define types for StatCard props
interface StatCardProps {
  number: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// StatCard component
const StatCard: React.FC<StatCardProps> = ({ number, label, icon: Icon }) => {
  return (
    <div className="p-6 text-center">
      <Icon className="h-8 w-8 mx-auto mb-4" />
      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}

const Starts = () => {
  // Define stats with proper types
  const stats: StatCardProps[] = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle2 },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "24/7", label: "Support Available", icon: BarChart }
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Starts;
