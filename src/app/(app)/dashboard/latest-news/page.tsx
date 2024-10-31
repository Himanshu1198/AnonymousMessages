'use client'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import './news.css'
import { Send } from 'lucide-react'

const newsItems = [
  {
    Title: 'New Financial Regulations Target Crypto Asset Disclosure',
    Date: '2024-10-30',
    Summary:
      'Regulatory body mandates crypto disclosure for transparent asset reporting.',
    Impact:
      'Increases transparency in asset management and minimizes illicit crypto usage.',
  },
  {
    Title: 'Property Tax Law Updated to Benefit First-Time Homebuyers',
    Date: '2024-10-29',
    Summary: 'Government lowers property tax rates for new homebuyers.',
    Impact:
      'Potential boost to real estate market by attracting first-time buyers.',
  },
  {
    Title: 'Court Rules in Favor of Property Owners on Eminent Domain Rights',
    Date: '2024-10-27',
    Summary:
      "Landmark ruling strengthens property owners' rights against eminent domain seizures.",
    Impact:
      "Sets a precedent for similar cases, enhancing property owners' bargaining power.",
  },
  {
    Title: 'Land Acquisition Act Modified to Speed Up Infrastructure Projects',
    Date: '2024-10-26',
    Summary: 'New amendment simplifies land acquisition for public projects.',
    Impact:
      'Could accelerate infrastructure projects but may raise disputes over fair compensation.',
  },
  {
    Title: 'Banking Act Amended to Address Consumer Rights in Loan Agreements',
    Date: '2024-10-25',
    Summary:
      'Strengthens protections for loan applicants with clearer terms and transparent fees.',
    Impact:
      'Improves consumer confidence in banking; banks need to adapt to new compliance standards.',
  },
  {
    Title: 'Inheritance Law Reformed for Digitized Property Records',
    Date: '2024-10-24',
    Summary:
      'Inheritance laws updated to recognize digital property records for smoother transfers.',
    Impact:
      'Modernizes inheritance laws, facilitating digital asset transfer and reducing legal disputes.',
  },
  {
    Title:
      'Interest Rates Cap Introduced for Personal Loans to Protect Borrowers',
    Date: '2024-10-23',
    Summary:
      'Central Bank sets an upper limit on personal loan interest rates.',
    Impact:
      'Reduces financial burden on borrowers, particularly benefiting low-income groups.',
  },
  {
    Title:
      'Mortgage Policies Tightened to Curb Speculative Real Estate Investment',
    Date: '2024-10-22',
    Summary:
      'Restrictive mortgage policies introduced to deter speculative property investments.',
    Impact:
      'Aims to stabilize property prices, protecting genuine buyers and preventing bubbles.',
  },
  {
    Title:
      'Environmental Impact Requirements for Real Estate Developments Made Stricter',
    Date: '2024-10-20',
    Summary:
      'Law mandates detailed environmental assessments for real estate projects.',
    Impact:
      'Encourages sustainable property development but may extend project timelines.',
  },
  {
    Title:
      'New Law Enforces Financial Transparency for Publicly Listed Real Estate Companies',
    Date: '2024-10-18',
    Summary:
      'Real estate companies required to disclose financial data to shareholders.',
    Impact:
      'Aims to enhance investor trust and minimize financial misrepresentation.',
  },
  {
    Title:
      'Bill Passed to Make Title Deeds Verification Mandatory in All Property Deals',
    Date: '2024-10-16',
    Summary: 'New bill enforces verification of title deeds to prevent fraud.',
    Impact:
      'Reduces fraud in property transactions, protecting buyers and sellers.',
  },
  {
    Title:
      'Financial Law Adds Strict Penalties for Tax Evasion in Real Estate Transactions',
    Date: '2024-10-15',
    Summary:
      'New penalties introduced to deter tax evasion in real estate sales.',
    Impact:
      'Could result in a more transparent real estate market and increased tax revenues.',
  },
  {
    Title:
      'Foreclosure Law Adjusted to Offer Grace Period for Homeowners During Economic Hardships',
    Date: '2024-10-14',
    Summary:
      'New law introduces a grace period for homeowners at risk of foreclosure.',
    Impact:
      'Provides relief to struggling homeowners, reducing foreclosure rates and enhancing financial stability.',
  },
  {
    Title: 'Government Introduces Law to Reduce Stamp Duty for Green Buildings',
    Date: '2024-10-13',
    Summary: 'Stamp duty reductions granted for eco-friendly constructions.',
    Impact:
      'Encourages sustainable building practices, benefiting the environment and green developers.',
  },
  {
    Title:
      'Personal Finance Protection Law Enacted to Regulate Payday Loan Interest Rates',
    Date: '2024-10-11',
    Summary:
      'Law introduces interest rate cap on payday loans, protecting low-income borrowers.',
    Impact:
      'Protects borrowers from exploitative lending practices, but may affect payday loan availability.',
  },
]

function page() {
  const [query, setQuery] = useState('')
  const searchQuery = () => {}

  return (
    <div className='news-container'>
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
        {newsItems.map((item) => (
          <Card>
            <CardHeader>
              <CardTitle>{item.Title}</CardTitle>
              <CardDescription>{item.Impact}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.Summary}</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button>View Entire Article</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default page
