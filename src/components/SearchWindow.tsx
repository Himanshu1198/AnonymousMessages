'use client'
import React, { useEffect, useState } from 'react'
import { Send } from 'lucide-react'
import './SearchWindow.css'

function SearchPage() {
  const [searchButtonState, setSearchButtonState] = useState(true)

  const searchQuery = () => {
    // setSearchButtonState(false)
    const searchInputContainer = document.getElementsByClassName(
      'search-input-parent-container'
    )
    searchInputContainer[0].classList.add(
      'search-input-parent-container-height'
    )
    const queryContainer = document.getElementsByClassName(
      'query-text-container'
    )
    queryContainer[0].classList.add('query-text-container-visible')
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='query-text-container'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores
        nulla quaerat corrupti hic nostrum, beatae dolores dignissimos
        necessitatibus mollitia impedit amet enim voluptates quia delectus cum
        fugit, id totam aut aperiam suscipit fugiat eos rerum voluptate?
        Molestias totam veritatis reprehenderit iusto nemo soluta vel magni
        error? Quaerat mollitia possimus odit non reiciendis dolor consequuntur
        veniam, saepe ad consequatur at inventore tempora impedit qui. Iure,
        necessitatibus repellat velit eveniet, hic nisi, ipsam in laudantium
        repellendus praesentium dolorum corporis quibusdam quis et veniam ipsa
        impedit magni. Maiores dolorem accusantium cumque neque non ratione,
        labore quam, praesentium voluptatem ad officiis sed! Consequatur tenetur
        repellat temporibus magnam, corporis explicabo, eum suscipit voluptates
        provident libero in quia, architecto eligendi. Tempora tenetur a
        recusandae rem beatae aut veritatis fuga vitae, quaerat expedita natus
        ad ipsam nisi impedit eaque consequatur dolorem, autem ab voluptatibus
        odit facilis repellendus sunt eum consectetur? Veniam ullam ea fugiat
        quas modi, laboriosam qui? Odit eius error ullam, quas facilis
        architecto voluptates commodi fugit nihil dolorem aut doloribus tenetur,
        dolor eaque? Quidem provident possimus doloremque blanditiis assumenda
        dolor, omnis aut delectus tempora cum repellendus iusto fugiat optio
        facilis minima vel rem dolorem aliquid sapiente porro quia. Libero
        maiores dolor ipsam eum quis!
      </div>
      <div className='flex justify-center items-center w-full search-input-parent-container'>
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
    </div>
  )
}

export default SearchPage
