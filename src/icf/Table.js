import React from 'react'

export default function Table() {

const lb =[
    {
      Player: "SKGAUTAM",
      Coins: "6,800",
      Rank: "1st"
    },
    {
      Player: "mahendra1987",
      Coins: "4,400",
      Rank: "2nd"
    },
    {
      Player: "Guru88",
      Coins: "819",
      Rank: "3rd"
    },
    {
      Player: "Ramniwas1998",
      Coins: "597",
      Rank: "4th"
    },
    {
      Player: "Pavanpjadhao",
      Coins: "419",
      Rank: "5th"
    },
    {
      Player: "gautamvaniya",
      Coins: "360",
      Rank: "6th"
    },
    {
      Player: "Rk1979",
      Coins: "360",
      Rank: "7th"
    },
    {
      Player: "govindrk143",
      Coins: "99",
      Rank: "8th"
    },
    {
      Player: "Babu007",
      Coins: "96",
      Rank: "9th"
    },
    {
      Player: "dinesh0106",
      Coins: "50",
      Rank: "10th"
    },
    {
      Player: "pappu8400",
      Coins: "40",
      Rank: "11th"
    },
    {
      Player: "Vimal87",
      Coins: "40",
      Rank: "12th"
    },
    {
      Player: "sunil8224",
      Coins: "38",
      Rank: "13th"
    },
    {
      Player: "Kaisersede",
      Coins: "38",
      Rank: "14th"
    },
    {
      Player: "Naguuma",
      Coins: "38",
      Rank: "15th"
    },
    {
      Player: "galaxy1",
      Coins: "29",
      Rank: "16th"
    },
    {
      Player: "Hari4361",
      Coins: "19",
      Rank: "17th"
    },
    {
      Player: "pintusarpeyoooo",
      Coins: "19",
      Rank: "18th"
    },
    {
      Player: "chirag1980",
      Coins: "15",
      Rank: "19th"
    },
    {
      Player: "kumarethaya",
      Coins: "13",
      Rank: "20th"
    },
    {
      Player: "Shankarbalaj",
      Coins: "13",
      Rank: "21st"
    },
    {
      Player: "Rohantanwar",
      Coins: "12",
      Rank: "22nd"
    },
    {
      Player: "omirummy3",
      Coins: "12",
      Rank: "23rd"
    },
    {
      Player: "Sreejithkv",
      Coins: "12",
      Rank: "24th"
    },
    {
      Player: "luna123",
      Coins: "12",
      Rank: "25th"
    },
    {
      Player: "kuttusinu",
      Coins: "12",
      Rank: "26th"
    },
    {
      Player: "MSDhoni07",
      Coins: "10",
      Rank: "27th"
    },
    {
      Player: "Vaniyarahul",
      Coins: "10",
      Rank: "28th"
    },
    {
      Player: "Lenin143",
      Coins: "10",
      Rank: "29th"
    },
    {
      Player: "hdsolanki",
      Coins: "7",
      Rank: "30th"
    },
    {
      Player: "pdrana",
      Coins: "7",
      Rank: "31st"
    },
    {
      Player: "mazit7",
      Coins: "6",
      Rank: "32nd"
    },
    {
      Player: "VipinR",
      Coins: "6",
      Rank: "33rd"
    },
    {
      Player: "ganu121",
      Coins: "6",
      Rank: "34th"
    },
    {
      Player: "pangkaj1113",
      Coins: "5",
      Rank: "35th"
    },
    {
      Player: "mani00700",
      Coins: "5",
      Rank: "36th"
    },
    {
      Player: "Kkkathir",
      Coins: "4",
      Rank: "37th"
    },
    {
      Player: "Shankarbala",
      Coins: "4",
      Rank: "38th"
    },
    {
      Player: "mahi0712",
      Coins: "3",
      Rank: "39th"
    },
    {
      Player: "Arunkuttapi",
      Coins: "3",
      Rank: "40th"
    },
    {
      Player: "Jithin9798",
      Coins: "3",
      Rank: "41st"
    },
    {
      Player: "mighty1993",
      Coins: "2",
      Rank: "42nd"
    },
    {
      Player: "kiranbanjara",
      Coins: "2",
      Rank: "43rd"
    },
    {
      Player: "hhgfcvvvjj",
      Coins: "2",
      Rank: "44th"
    },
    {
      Player: "sgdhdkkdkdl",
      Coins: "2",
      Rank: "45th"
    },
    {
      Player: "RuchangAbhi",
      Coins: "2",
      Rank: "46th"
    },
    {
      Player: "Vishal123345",
      Coins: "2",
      Rank: "47th"
    },
    {
      Player: "akshay54321",
      Coins: "2",
      Rank: "48th"
    },
    {
      Player: "sjh1234",
      Coins: "2",
      Rank: "49th"
    },
    {
      Player: "Suganyaselva",
      Coins: "2",
      Rank: "50th"
    }
  ];

  return (
    <>
    <table class="table table-bordered table-hover table-condensed">
        <thead><tr><th title="Field #1">Player</th>
        <th title="Field #2">Freedom Reward Coins</th>
        <th title="Field #3">Rank</th>
        </tr></thead>
        <tbody>

             {lb.map(person => {
    return (
      <tr key={person.Rank}>
         <td>{person.Player}</td>
        <td>{person.Coins}</td>
        <td>{person.Rank}</td>
        
      </tr>
    )
  })}
    
        </tbody></table>
    </>
    
  )
}
