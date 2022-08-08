import React from 'react';
import IcfHeadBanner from './IcfHeadBanner';
import IcfTabs from './IcfTabs'

export default function IcfAccordian() {
    return (

        <>

               <IcfHeadBanner/>

               <IcfTabs/>


                <section>
                    <div className="container my-5">
                        <div id="accordion">
                            <div className="card mb-2">
                                <div className="card-header1">
                                    <div className="btn collapsed1" id="accordian1">
                                        Milestones Freedom Rewards T & C
                                    </div>
                                </div>
                                <div id="accordian1panel" className="collapse" style={{ display: "none" }}>
                                    <div className="card-body">
                                        <ul className="text-muted px-2">
                                            <li>Levels can be claimed depending on the reward points earned in freedom rewards section  (previously Baazi Rewards).</li>
                                            <li>There are rewards for each level that can be redeemed only in the 50-day period. Post 7th September ICF offers will not be applicable.</li>
                                            <li>Each level has a set number of Reward Points which a user needs to earn before claiming the reward associated with it.</li>
                                            <li>Each user can claim the same reward multiple times even during the same day.
                                            </li>
                                            <li>Rewards such as Car, Bike, TV, etc would take up to 90 days to be fulfilled.<br />
                                                a. In case a player does not want a reward, he/she can claim a cash reward of the amount excluding all the relevant taxes.
                                            </li>
                                            <li>CardBaazi has all the rights to change the reward prize.
                                            </li>
                                            <li>CardBaazi can reach out to players post the winnings to record their testimonials/experiences.
                                            </li>
                                            <li>Reward Points are calculated based on the worth/amount of cash games played.</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-2">
                                <div className="card-header2">
                                    <div className="collapsed2 btn" id="accordian2">
                                        Leaderboard T & C:
                                    </div>
                                </div>
                                <div id="accordian2panel" className="collapse" style={{ display: "none" }}>
                                    <div className="card-body">
                                        <ul className="text-muted px-2">
                                            <li>Daily Leaderboard:<br />
                                                - Daily Leaderboard will run from Monday to Thursday at specifc hours.<br />
                                                - Users who rank the highest on leaderboards will claim the maximum amount prize.<br />
                                                - Players who generated highest "Freedom" Reward Points during specific hours of daily leaderboard for respective game will rank the highest.<br />
                                                - Results & Winnings will be updated within 24 to 48 hours after the completion of leaderboard.<br />
                                            </li>
                                            <li>Multi-Day Leaderboard:<br />
                                                - Multi-Day Leaderboard will run from Friday to Sunday at specific hours.<br />
                                                - Users who rank the highest on leaderboards will claim the maximum amount prize.<br />
                                                - Players who generated highest Freedom Reward Points during specific hours of leaderboard for each game will rank the highest.<br />
                                                - Results & Winnings will be updated within 24 to 48 hours after the completion of leaderboard.<br />

                                            </li>
                                            <li>If two players have the same freedom reward points, then the player who received the highest points first will rank higher.
                                            </li>
                                            <li>
                                                CardBaazi holds the right to rescind the prize(s) offered if any unfair means are used by a player to win the prize(s).
                                            </li>
                                            <li>
                                                Restricted States: You acknowledge that the state laws of Assam, Odisha, Telangana, and Andhra Pradesh (also called restricted territories or restricted states) do not permit the residents of the aforementioned states to play cash rummy games or tournaments online. If you reside in any of these states, you must abide by the state laws and must not use CardBaazi Services's to deposit cash, withdraw cash, or participate in cash games or tournaments on CardBaazi.
                                            </li>
                                            <li>
                                                Players residing in restricted states are not eligible for any winning bonuses.
                                            </li>
                                            <li>
                                                To be eligible for any prizes and benefits, players must ensure that they have provided us with their valid email addresses and mobile numbers.
                                            </li>
                                            <li>Players whose KYC is not approved will not be eligible for any prizes or benefits.</li>
                                            <li>All standard CardBaazi terms and conditions apply.</li>
                                            <li>The decision of the CardBaazi management shall be final and binding in case of any disputes.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-2">
                                <div className="card-header3">
                                    <div className="collapsed3 btn" id="accordian3">
                                        Overall FAQs
                                    </div>
                                </div>
                                <div id="accordian3panel" className="collapse" style={{ display: "none" }} >
                                    <div className="card-body">
                                        <ul className="text-muted px-2">
                                            <li>1. What is Indian Card Festival?<br />
                                                -The Indian Card Festival, often called as ICF, is the country's largest multi-sport online mobile gaming tournament, with a total value of Rs 75 crores in winnings. The tournament, which will run from July 11th to August 30th 2022 is spread across different categories of digital skill games such as Poker, Rummy, Call Break. Our 5+ games across a wide variety of categories can potentially create thousands of winners between Rs 1 lakh and 1 crore prize range during this Card festival.  <br />
                                                - Daily winnings of more than 1CR.

                                            </li>
                                            <li>2. How do I participate in ICF?<br />
                                                - The Indian Card Festival is a platform wide event. Feel free to participate in any game on the platform in the following method -
                                                Go to CardBaazi App and start playing cash games of your favorite category.<br />
                                            </li>
                                            <li>3. How much can I win at ICF?<br />
                                                - The Indian Card Festival is a multi-sport online mobile gaming tournament, with a total value of Rs 75 crores in winnings.
                                            </li>
                                            <li>
                                                4. When will I get my winnings?<br />
                                                <b>-Leaderboard</b><br />
                                                After the leaderboard is completed, Results will be verified and post verification & declaration of match results within 24 to 48  hours, your winning amount will be credited to your wallet. Please contact our customer support in case you do not receive your winning amount within 24 to 48 hours.
                                                <b>- Milestones</b><br />
                                                Cash Rewards claimed on Freedom Rewards will be credited instantly into the wallet of users. Any non-cash reward will take 2-3 months for fulfilment and will be suject to other T&Cs
                                            </li>
                                            <li>
                                                5. How can I withdraw my winnings?<br />
                                                You can withdraw money only from the winnings account in your account once your account is KYC verified. This verification is a one-time process which doesn't need to be repeated unless you wish to make changes to your account. Once your account is verified, you can withdraw money from your CardBaazi account.<br />
                                                Note - In Winnings, only real cash is considered no consideration of winnings given in Bonus cash.
                                            </li>
                                            <li>
                                                6. What are the taxes applicable if I win?<br />
                                                As per the Income Tax Act 1961, if your individual net winnings for a single contest are more than Rs.10,000, tax of 30% will be deducted. The remaining amount (68.8%) will be credited to your winnings balance. For e.g. If you win Rs.1,00,000, tax of Rs.30,000 will be deducted and your actual winnings are Rs.70,000.
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header4">
                                    <div className="collapsed4 btn" id="accordian4" >
                                        General T&C
                                    </div>
                                </div>
                                <div id="accordian4panel" className="collapse" style={{ display: "none" }}>
                                    <div className="card-body">
                                        <ul className="text-muted px-2">
                                            <li>The event will be live from 11th July, 2022, IST 12 AM  to 30th August, 2022, IST 11:59 PM.</li>
                                            <li>In case of any disputes, CardBaazi's decision is final and binding.</li>
                                            <li>The Company reserves the right to extend, cancel, discontinue, prematurely withdraw, change, alter or modify any promotion/Event or any part thereof at its sole discretion at any time during its validity.</li>
                                            <li> Participation in a promotion/Event shall be treated as unconditional acceptance by the participant to all the applicable terms and conditions mentioned herein.
                                            </li>
                                            <li>CardBaazi's decision with respect to all aspects of a promotion shall be final and binding. CardBaazi reserves the right to extend, cancel, discontinue, prematurely withdraw, change, alter or modify any promotion/Event or any part thereof at its sole discretion at any time during its validity.
                                            </li>
                                            <li>Winners will be contacted on their registered email IDs and/or mobile number for this purpose within 7 days from the completion of the Event.
                                            </li>
                                            <li>CardBaazi's decision with respect to all aspects of a promotion shall be final and binding.
                                            </li>
                                            <li> You agree that your use of and conduct in relation to the cash prizes shall be in a way that does not adversely affect CardBaazi's standing and reputation. You shall not indulge in any activity(s) that shall result in defamation or disparagement of CardBaazi, in any way, or form.</li>
                                            <li>Only Indian nationals aged 18 years or above and located in India can take part in the promotion/Event, and users cannot be from Restricted States – for more information please refer to CardBaazi's T&Cs.</li>
                                            <li>Prize restriction: Prizes are non-transferable, non-assignable, and not redeemable for cash; however, CardBaazi reserves the right to make equivalent prize substitutions in its sole discretion. Prizes are not transferable and must be accepted as awarded with no substitutions in cash or otherwise, except at CardBaazi's discretion. CardBaazi reserves the right to substitute a prize of equivalent monetary value if a prize cannot be awarded as described. CardBaazi will not replace any lost or stolen prizes. No more than the stated number of prizes will be awarded.</li>
                                            <li>You will be liable to CardBaazi for any damage or cost (including reasonable attorney fees) it may suffer arising out of your use of the cash prizes.</li>
                                            <li>In relation to your Gameplay Content (i.e. all text, videos, visual, names, likenesses, artwork, images, CardBaazi name, logo, trademark or trade name'), you agree that CardBaazi has all copyrights and derivative rights in your Gameplay Content and a non-exclusive, perpetual right to use, publish, re-publish or reproduce your Gameplay Content by any means CardBaazi sees fit for the promotional purpose, including sharing your name, username and images to social media and third party media channels. You irrevocably waive any claim against CardBaazi relating to the use of your Gameplay Content and promise not to bring any such claim or action in the future. You also waive any right to inspect, modify, approve or disapprove the layout, representation, presentation or other aspect of your Gameplay Content as recorded by CardBaazi during the Event, and understand that the Gameplay Content will be the property of CardBaazi absolutely.</li>
                                            <li>You understand and agree that as a winner, you may be required by CardBaazi to participate in promotional activities organized by CardBaazi, such as providing a testimonial, including text, interview, names, likenesses, artwork, images (collectively, my 'Testimonial'). You will make yourself available to prepare the Testimonial as per the directions provided by CardBaazi. You waive any right to inspect, modify, approve or disapprove the layout, representation, presentation or other aspect of your Testimonial after you submit it to CardBaazi and understand that the Testimonial will be the property of CardBaazi absolutely.</li>
                                            <li>The Event is not open to CardBaazioyees, officers, directors of CardBaazi, including its subsidiaries, affiliates, group companies, authorized agents, consultants, independent contractors, interns, and short-term / temporary employees ('CardBaazi Affiliates'). Any and all CardBaazi Affiliates are not eligible to participate or win in the Event.</li>
                                            <li>All games are subject to Fairplay checks and compliance with CardBaazi's T&Cs and Privacy Policy.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </>
            )
}
