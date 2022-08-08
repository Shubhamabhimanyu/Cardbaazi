import React from 'react'

export default function IcfHeadBanner() {
  return (
   <>
    <section className="banner my-3">
                    <div className="container">
                        <picture>
                            <div onclick="openScreen('DrawerRewards')" className="button">
                                <source media="(max-width: 576px)" srcset="https://web.pokerbaazicdn.com/images/icf/Promotion-Mobile-377X206v1.jpg" className="rounded-0" />
                                <img src="https://web.pokerbaazicdn.com/images/icf/Promotion-Sizes-1296X323v1.jpg" alt=""
                                    className="img-fluid w-100 h-auto bannerBorderRadius" />
                            </div>
                        </picture>
                    </div>
                </section>
   
   </>
  )
}
