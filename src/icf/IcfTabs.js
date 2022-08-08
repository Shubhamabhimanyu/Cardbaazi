import React from 'react'
import IcfFreedomRewardTabContent from './IcfFreedomRewardTabContent'
import IcfInfoTabContent from './IcfInfoTabContent'

export default function Tabs() {
  return (

    <>
      <div class="container my-3">
        <h1 class="text-center text-sm-start fw-bold text-black py-3 responsiveHeading">75 Crore Indian <span
          class="text-blue"> Card Festival</span></h1>

        <section class="parentToAll">

          <ul className="nav nav-pills mb-3 custom-main-tabs" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active fw-bold" id="pills-medal-tab" data-bs-toggle="pill"
                data-bs-target="#pills-medal" type="button" role="tab" aria-controls="pills-medal"
                aria-selected="true">Info</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link fw-bold xyz" id="pills-winnings-tab" data-bs-toggle="pill"
                data-bs-target="#pills-winnings" type="button" role="tab" aria-controls="pills-winnings"
                aria-selected="false">Leaderboard Results</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link fw-bold" id="pills-cashes-tab" data-bs-toggle="pill" data-bs-target="#pills-cashes"
                type="button" role="tab" aria-controls="pills-cashes" aria-selected="false">Freedom Rewards</button>
            </li>
          </ul>
     <div class="tab-content" id="pills-tabContent"> {/*whole tabs and content start here */}


         {/* sub tabs of icf_info tab*/}
          <div class="tab-pane fade show active" id="pills-medal" role="tabpanel" aria-labelledby="pills-medal-tab">
          <nav class="mb-3">
            <div class="nav nav-tabs custom-sub-tabs" role="tablist">
              <button class="nav-link active fw-bold" id="nav-medal-player-tab" data-bs-toggle="tab"
                data-bs-target="#nav-medal-player" type="button" role="tab" aria-controls="nav-medal-player"
                aria-selected="true">Rummy</button>
              <button class="nav-link fw-bold" id="nav-medal-states-tab" data-bs-toggle="tab"
                data-bs-target="#nav-medal-states" type="button" role="tab" aria-controls="nav-medal-states"
                aria-selected="false">Poker</button>
              <button class="nav-link fw-bold" id="nav-medal-states-tab" data-bs-toggle="tab"
                data-bs-target="#nav-medal-states1" type="button" role="tab" aria-controls="nav-medal-states1"
                aria-selected="false">Call Break</button>
              <button class="nav-link fw-bold" id="nav-medal-states-tab" data-bs-toggle="tab"
                data-bs-target="#nav-medal-states2" type="button" role="tab" aria-controls="nav-medal-states2"
                aria-selected="false">Dehla Pakad</button>
              <button class="nav-link fw-bold" id="nav-medal-states-tab" data-bs-toggle="tab"
                data-bs-target="#nav-medal-states3" type="button" role="tab" aria-controls="nav-medal-states3"
                aria-selected="false">T23</button>
              <button class="nav-link fw-bold" id="nav-medal-states-tab" data-bs-toggle="tab"
                data-bs-target="#nav-medal-states4" type="button" role="tab" aria-controls="nav-medal-states4"
                aria-selected="false">Pool51</button>
            </div>
          </nav>
          


           {/* icf info_tab content */}
         <IcfInfoTabContent/>
             {/* icf info_tab content end */}
       </div>
          
          {/* sub tabs of icf_info tab end */}

             {/* sub tabs of icf_leaderboadrd tab    */}
          <div class="tab-pane fade" id="pills-winnings" role="tabpanel" aria-labelledby="pills-winnings-tab">
                <nav class="mb-3">
                  <div class="nav nav-tabs custom-sub-tabs" role="tablist">
                    <button class="nav-link active fw-bold" id="nav-winning-player-tab" data-bs-toggle="tab"
                      data-bs-target="#nav-winning-player" type="button" role="tab" aria-controls="nav-winning-player"
                      aria-selected="true">Rummy</button>
                    <button class="nav-link fw-bold" id="nav-winning-states-tab" data-bs-toggle="tab"
                      data-bs-target="#nav-winning-states" type="button" role="tab" aria-controls="nav-winning-states"
                      aria-selected="false">Poker</button>
                    <button class="nav-link fw-bold" id="nav-winning-player-tab1" data-bs-toggle="tab"
                      data-bs-target="#nav-winning-player1" type="button" role="tab" aria-controls="nav-winning-player"
                      aria-selected="true">Dehla Pakad</button>
                    <button class="nav-link fw-bold" id="nav-winning-states-tab1" data-bs-toggle="tab"
                      data-bs-target="#nav-winning-states1" type="button" role="tab" aria-controls="nav-winning-states"
                      aria-selected="false">Call Break</button>
                    <button class="nav-link fw-bold" id="nav-winning-player-tab2" data-bs-toggle="tab"
                      data-bs-target="#nav-winning-player2" type="button" role="tab" aria-controls="nav-winning-player"
                      aria-selected="true">T23</button>
                    <button class="nav-link fw-bold" id="nav-winning-states-tab2" data-bs-toggle="tab"
                      data-bs-target="#nav-winning-states2" type="button" role="tab" aria-controls="nav-winning-states"
                      aria-selected="false">Pool51</button>
                  </div>
                </nav>
                       
                        {/* icf leaderboard content  */}

                        {/* icf leaderboard content ends here */}

                </div>
                {/* sub tabs of icf_leaderboadrd tab ends here */}
              
               {/* no sub tabs in Freedom Reward tab */}
                <div class="tab-pane fade" id="pills-cashes" role="tabpanel" aria-labelledby="pills-cashes-tab">
                 <nav class="mb-3">
                  <div class="nav nav-tabs custom-sub-tabs" role="tablist">
                    {/* <!--<button class="nav-link active fw-bold" id="nav-cashes-player-tab" data-bs-toggle="tab"
                      data-bs-target="#nav-cashes-player" type="button" role="tab"
                      aria-controls="nav-cashes-player" aria-selected="true">Players</button>
                    <button class="nav-link fw-bold" id="nav-cashes-states-tab" data-bs-toggle="tab"
                      data-bs-target="#nav-cashes-states" type="button" role="tab"
                      aria-controls="nav-cashes-states" aria-selected="false">States</button>--> */}
                  </div>
                 </nav>
                    {/* icf freedom reward content  */}
                       <IcfFreedomRewardTabContent/>
                    {/* icf freedom reward content ends here */}

              </div>
               {/* no sub tabs in Freedom Reward tab */}


     </div> {/*  whole tab & content end here */}
        </section>
      </div>

     
    </>
  )
}
