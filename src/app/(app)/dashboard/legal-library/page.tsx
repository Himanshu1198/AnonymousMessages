'use client'
import React, { useState } from 'react'
import './library.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

const cases = [
  {
    Title: 'Smith v. National Bank on Interest Rate Cap Enforcement',
    Summary:
      'A landmark case where the court ruled on the legality of enforced caps on personal loan interest rates by National Bank.',
    Date: '2024-08-20',
    Link: 'https://examplelawsite.com/cases/smith-v-national-bank',
    Jurisdiction: 'California, USA',
    InvolvedParties: ['John Smith', 'National Bank'],
    CaseOutcome: 'Interest rate cap upheld',
    Significance:
      'Sets precedent for interest rate cap enforcement in California.',
  },
  {
    Title: 'Brown Family v. State Department of Housing on Property Tax Relief',
    Summary:
      'The Brown family challenges property tax relief qualifications, leading to a clarification in eligibility guidelines.',
    Date: '2024-09-14',
    Link: 'https://examplelawsite.com/cases/brown-v-state-department-housing',
    Jurisdiction: 'Texas, USA',
    InvolvedParties: ['Brown Family', 'Texas Department of Housing'],
    CaseOutcome: 'Property tax relief denied',
    Significance:
      'Clarifies eligibility for tax benefits aimed at first-time buyers.',
  },
  {
    Title:
      'City of Metropolis v. Whitefield on Eminent Domain for Infrastructure',
    Summary:
      'This case discusses the extent to which eminent domain can be invoked for public infrastructure expansion.',
    Date: '2024-07-22',
    Link: 'https://examplelawsite.com/cases/metropolis-v-whitefield',
    Jurisdiction: 'New York, USA',
    InvolvedParties: ['City of Metropolis', 'Whitefield Estates'],
    CaseOutcome: 'Eminent domain partially upheld',
    Significance:
      'Limits government authority to seize private property for non-essential infrastructure.',
  },
  {
    Title: 'Doe v. Green Realty on Environmental Law Compliance in Real Estate',
    Summary:
      'Doe files a case against Green Realty for failing to meet environmental impact standards for new construction.',
    Date: '2024-06-30',
    Link: 'https://examplelawsite.com/cases/doe-v-green-realty',
    Jurisdiction: 'Oregon, USA',
    InvolvedParties: ['Jane Doe', 'Green Realty LLC'],
    CaseOutcome: 'Green Realty fined and ordered to comply',
    Significance:
      'Highlights the need for real estate companies to adhere to environmental impact laws.',
  },
  {
    Title: 'Johnson v. Federal Reserve on Cryptocurrency Asset Regulations',
    Summary:
      "The Federal Reserve's regulations on crypto asset disclosures face scrutiny in a case filed by Johnson.",
    Date: '2024-08-05',
    Link: 'https://examplelawsite.com/cases/johnson-v-federal-reserve',
    Jurisdiction: 'Federal, USA',
    InvolvedParties: ['Mark Johnson', 'Federal Reserve'],
    CaseOutcome: "Federal Reserve's crypto regulations upheld",
    Significance:
      'Validates government authority to impose disclosure standards on crypto assets.',
  },
  {
    Title: 'Real Estate Transparency Coalition v. Smith Developers',
    Summary:
      'The Real Estate Transparency Coalition sues Smith Developers for failure to disclose financial information per new transparency law.',
    Date: '2024-09-02',
    Link: 'https://examplelawsite.com/cases/real-estate-coalition-v-smith-developers',
    Jurisdiction: 'Florida, USA',
    InvolvedParties: ['Real Estate Transparency Coalition', 'Smith Developers'],
    CaseOutcome: 'Court orders disclosure',
    Significance: 'First case enforcing the new real estate transparency law.',
  },
  {
    Title: 'Perez v. Liberty Loans on Unlawful Payday Loan Interest Rates',
    Summary:
      'Perez files a lawsuit against Liberty Loans for breaching the new cap on payday loan interest rates.',
    Date: '2024-08-18',
    Link: 'https://examplelawsite.com/cases/perez-v-liberty-loans',
    Jurisdiction: 'Nevada, USA',
    InvolvedParties: ['Luis Perez', 'Liberty Loans'],
    CaseOutcome: 'Interest rate cap enforced',
    Significance:
      'Promotes borrower protection against predatory lending practices.',
  },
  {
    Title:
      'State v. Jacobsen on Property Tax Fraud in Real Estate Transactions',
    Summary:
      'Jacobsen is accused of tax fraud by falsifying property valuations to evade tax obligations.',
    Date: '2024-10-01',
    Link: 'https://examplelawsite.com/cases/state-v-jacobsen',
    Jurisdiction: 'Arizona, USA',
    InvolvedParties: ['State of Arizona', 'Michael Jacobsen'],
    CaseOutcome: 'Defendant found guilty',
    Significance:
      'Establishes stricter scrutiny on property valuations in real estate deals.',
  },
  {
    Title: 'Anderson v. Builders Alliance on Digital Property Recognition',
    Summary:
      'A case that discusses the inheritance rights of digital property following new recognition laws.',
    Date: '2024-07-10',
    Link: 'https://examplelawsite.com/cases/anderson-v-builders-alliance',
    Jurisdiction: 'Washington, USA',
    InvolvedParties: ['Alice Anderson', 'Builders Alliance'],
    CaseOutcome: 'Court recognizes digital property rights',
    Significance:
      'Paves the way for digital property inclusion in inheritance.',
  },
  {
    Title: 'Green v. City Bank on Mortgage Policy Restrictions',
    Summary:
      "Green challenges City Bank's refusal to grant mortgages under new restrictive lending policies.",
    Date: '2024-08-28',
    Link: 'https://examplelawsite.com/cases/green-v-city-bank',
    Jurisdiction: 'Illinois, USA',
    InvolvedParties: ['Emily Green', 'City Bank'],
    CaseOutcome: "Bank's mortgage restriction upheld",
    Significance:
      'Supports stringent mortgage policies to curb speculative buying.',
  },
]

function page() {
  const [query, setQuery] = useState('')
  const searchQuery = () => {}

  return (
    <>
      <div className='library-container'>
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
          {cases.map((item) => (
            <Card>
              <CardHeader>
                <CardTitle>{item.Title}</CardTitle>
                <CardDescription>{item.Date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.Summary}</p>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <a href={item.Link} target='_blank'>
                  <Button>View Case</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default page
