'use client'
import React from 'react'
import { Send } from 'lucide-react'
import './blogs.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const blogs = [
  {
    Title: 'Understanding the New Crypto Asset Disclosure Regulations',
    Summary:
      'A breakdown of the recent crypto asset regulations and what they mean for investors and financial transparency.',
    Username: 'FinLawExpert',
    Date: '2024-10-28',
  },
  {
    Title: 'How New Property Tax Benefits Aid First-Time Homebuyers',
    Summary:
      'Exploring the latest property tax reforms and how they make home ownership more affordable for first-time buyers.',
    Username: 'HomeBuyerAdvisor',
    Date: '2024-10-27',
  },
  {
    Title:
      'Eminent Domain Rights: What Property Owners Should Know After Recent Rulings',
    Summary:
      'An overview of eminent domain rights and recent court rulings that strengthen protections for property owners.',
    Username: 'PropertyLawGuru',
    Date: '2024-10-26',
  },
  {
    Title: 'The Impact of Modified Land Acquisition Laws on Infrastructure',
    Summary:
      'How the recent land acquisition amendment aims to expedite infrastructure projects and the potential implications.',
    Username: 'InfraInsider',
    Date: '2024-10-25',
  },
  {
    Title: 'Consumer Rights in Banking: New Protections for Loan Applicants',
    Summary:
      'Analyzing recent amendments to the Banking Act and how they enhance consumer protection in loan agreements.',
    Username: 'BankingProtector',
    Date: '2024-10-24',
  },
  {
    Title: 'Digitizing Inheritance: How New Laws Recognize Digital Property',
    Summary:
      'Discussing inheritance reforms and the role of digital property records in modern asset transfer.',
    Username: 'EstateLawAdvisor',
    Date: '2024-10-23',
  },
  {
    Title: 'Why Capping Interest Rates on Personal Loans Matters for Borrowers',
    Summary:
      'Exploring the impact of new interest rate caps on personal loans and how they benefit borrowers.',
    Username: 'FinanceCare',
    Date: '2024-10-22',
  },
  {
    Title:
      'Tightened Mortgage Policies: A Step Toward Sustainable Real Estate Investment',
    Summary:
      'Understanding the implications of restrictive mortgage policies in curbing speculative real estate investments.',
    Username: 'RealEstateWatch',
    Date: '2024-10-21',
  },
  {
    Title:
      'Environmental Impact Laws for Real Estate: Stricter Requirements Ahead',
    Summary:
      'What developers need to know about the latest environmental impact requirements for real estate projects.',
    Username: 'EcoLawExpert',
    Date: '2024-10-20',
  },
  {
    Title:
      'Transparency in Real Estate: New Law Requires Public Financial Disclosures',
    Summary:
      'An overview of the new transparency law for real estate companies and its benefits for investors.',
    Username: 'MarketIntegrity',
    Date: '2024-10-19',
  },
  {
    Title:
      'Title Deeds Verification Law: Reducing Fraud in Property Transactions',
    Summary:
      'How mandatory title deed verification aims to reduce fraud in property transactions for a safer market.',
    Username: 'SafePropertyDeals',
    Date: '2024-10-18',
  },
  {
    Title:
      'Tax Evasion Penalties for Real Estate: What Sellers Should Be Aware Of',
    Summary:
      'Examining new financial law penalties for tax evasion in real estate and the impact on sellers.',
    Username: 'TaxLawToday',
    Date: '2024-10-17',
  },
  {
    Title: 'Grace Period for Homeowners: Adjustments to Foreclosure Laws',
    Summary:
      'Explaining the new grace period provisions for homeowners facing economic hardship and their benefits.',
    Username: 'HomeReliefHub',
    Date: '2024-10-16',
  },
  {
    Title: 'Going Green: Stamp Duty Reductions for Eco-Friendly Buildings',
    Summary:
      'The benefits of stamp duty reductions for green buildings and how this law promotes sustainable construction.',
    Username: 'GreenBuildLaw',
    Date: '2024-10-15',
  },
  {
    Title:
      'Personal Finance Protection: New Regulations on Payday Loan Interest Rates',
    Summary:
      'How recent laws capping payday loan interest rates protect low-income borrowers from predatory lending.',
    Username: 'BorrowerGuardian',
    Date: '2024-10-14',
  },
]

function page() {
  const searchQuery = () => {}

  return (
    <div className='blogs-container'>
      <div className='flex justify-center items-center w-full search-input-parent-container search-input-parent-container-height'>
        <div className='search-input-container'>
          <input
            className='search-input'
            type='text'
            placeholder='Search Videotube'
          />
          <div
            className='search-icon-container cursor-pointer'
            onClick={searchQuery}
          >
            <Send />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5 -mt-96'>
        {blogs.map((item) => (
          <Card>
            <CardHeader>
              <CardTitle>{item.Title}</CardTitle>
              <CardDescription>{item.Date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.Summary}</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button>{item.Username}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default page
