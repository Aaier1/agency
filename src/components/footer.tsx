import Link from 'next/link'
import { Code } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Code className="h-6 w-6" />
              <span className="font-bold text-lg">AaierIt</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming businesses through innovative web solutions and digital marketing strategies.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/web-development" className="text-sm text-muted-foreground hover:text-foreground">Web Development</Link></li>
              <li><Link href="/services/seo" className="text-sm text-muted-foreground hover:text-foreground">SEO Optimization</Link></li>
              <li><Link href="/services/digital-marketing" className="text-sm text-muted-foreground hover:text-foreground">Digital Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground">Portfolio</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">contact@aaierit.com</li>
              <li className="text-sm text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-sm text-muted-foreground">123 Business Street<br />New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AaierIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}