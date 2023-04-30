import React, { useEffect } from 'react'
import Newsitems from './Newsitems'
import Spinner from './spinner'
import { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {

  let {mode, progress, category, country } = props;
  const [articles,setarticles] = useState([]);
  const [page,setpage] = useState(1);
  const [totalresults,settotalresults] = useState(0);
  const [errresults,seterrresults] = useState(null);

  const fetchMoreData = async () => {
    await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1e0a9b492d664dd1b3751ee483316063&pageSize=6&page=${page+1}`)
    .then((data)=>{
      if(data.status===426){
        return  {"status": "ok",
        "totalResults": articles.length,
        "articles": [{}]}
      }
        return data.json();
    })
    .then((respone)=>{
        setarticles(articles.concat(respone.articles))
        setpage(page+1)
        settotalresults(respone.totalResults)
    })
    progress(100)
  };

  useEffect(() => {
    window.scrollTo(0,0);
    document.body.style.backgroundColor = localStorage.getItem("M") === "dark"? "#343a40": "white" ;
    update();
}, [])

  const update = async () => {
    progress(10)
    await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1e0a9b492d664dd1b3751ee483316063&pageSize=6&page=${page}`)
    .then((data)=>{
      if(data.status===426 || data.status===429){
        seterrresults("Sorry, These below news are old !! \n Because API are not responding \n But you can also read these News")
        if(data.status===429){
          seterrresults("You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours).")
        }
        return {
          "status": "ok",
          "totalResults": 0,
          "articles": [
          {
          "source": {
          "id": null,
          "name": "NDTV News"
          },
          "author": null,
          "title": "Adipurush: Presenting Kriti Sanon As Janaki In New Posters - NDTV Movies",
          "description": "Adipurush, directed by Om Raut, is based on the Ramayana",
          "url": "https://www.ndtv.com/entertainment/adipurush-presenting-kriti-sanon-as-janaki-in-new-posters-3989874",
          "urlToImage": "https://c.ndtvimg.com/2023-04/0325fpkg_kriti_625x300_29_April_23.jpg",
          "publishedAt": "2023-04-29T04:44:44Z",
          "content": "Kriti Sanon shared this image. (courtesy: kritisanon)\r\nNew Delhi: On Saturday morning, the makers of Adipurush shared new posters featuring the film's lead actress Kriti Sanon, who plays the role of … [+1981 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Livemint"
          },
          "author": "Asit Manohar",
          "title": "Why Indian stock market has been rising for last six sessions — explained | Mint - Mint",
          "description": "Indian stock market may gain strength by heavy buying in banking, auto and capital goods segments, say experts",
          "url": "https://www.livemint.com/market/stock-market-news/why-indian-stock-market-has-been-rising-for-last-six-sessions-explained-11682742887345.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2023/04/29/600x338/Stock_market_news_1682743170088_1682743170551.jpg",
          "publishedAt": "2023-04-29T04:42:47Z",
          "content": "Indian stock market closed higher on all five sessions in the week gone by. Among key benchmark indices, NSE Nifty gained 407 points or 2.31 per cent last week whereas as BSE Sensex went up over 1400… [+4144 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "On Samsung Galaxy S23, Galaxy S22, THIS hidden tool will erase objects from photos - HT Tech",
          "description": "If you are a Samsung smartphone user, then this hidden photo-editing tool will erase unwanted objects from photos in just a few steps.",
          "url": "https://tech.hindustantimes.com/how-to/on-samsung-galaxy-s23-galaxy-s22-this-hidden-tool-will-erase-objects-from-photos-71682742916389.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2023/04/29/1600x900/Galaxy_S23_Ultra_Lifestyle_09_LI_1682743089036_1682743105050.jpg",
          "publishedAt": "2023-04-29T04:39:24Z",
          "content": "If you are using a Samsung Galaxy S23, Galaxy S22, or some other Samsung smartphones, then know you have a hidden tool that can remove unwanted objects from photos. This need arises in certain situat… [+1407 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "Solar storm delayed! But there is WORSE news coming for Earth - HT Tech",
          "description": "Earlier NOAA forecasters predicted that a CME cloud could be hitting the Earth on April 27 or 28 and spark a solar storm. It has not yet arrived. But that could actually be a scary development for the Earth.",
          "url": "https://tech.hindustantimes.com/tech/news/solar-storm-delayed-but-there-is-worse-news-coming-for-earth-71682739935633.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2023/04/29/1600x900/m73-flare-rotated_0_1680256680821_1682739978598.jpeg",
          "publishedAt": "2023-04-29T03:52:55Z",
          "content": "Amazingly, astronomers are perplexed right now. A solar storm was predicted to strike the Earth on either April 27 or 28 by the National Oceanic and Atmospheric Administration (NOAA). The storm was g… [+2361 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "WION"
          },
          "author": "WION Web Team",
          "title": "Indian Air Force uses night vision goggles, bravely rescues 121 people from Sudan airstrip - WION",
          "description": "Indian Air Force uses night vision goggles, bravely rescues 121 people from Sudan airstrip",
          "url": "https://www.wionews.com/india-news/indian-air-force-uses-night-vision-goggles-bravely-rescues-121-people-from-sudan-airstrip-587183",
          "urlToImage": "http://cdn.wionews.com/sites/default/files/2023/04/29/348437-untitled-design-2023-04-29t100114299.png",
          "publishedAt": "2023-04-29T03:23:21Z",
          "content": "Braving all odds, including a bad airstrip and poor night vision, Indian Air Force personnel on the intervening night of 27 April and 28, rescued 121 people from Wadi Sayyidna in Sudan in an IAF C-13… [+2638 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "NDTV News"
          },
          "author": null,
          "title": "UAE's Sultan Al-Neyadi Becomes 1st Arab Astronaut To Complete Spacewalk - NDTV",
          "description": "UAE astronaut Sultan Al-Neyadi has become the first Arab to undertake a spacewalk during Expedition 69 venturing out of the International Space Station (ISS) and completing his spacewalk.",
          "url": "https://www.ndtv.com/world-news/uaes-sultan-al-neyadi-becomes-1st-arab-astronaut-to-complete-spacewalk-3989666",
          "urlToImage": "https://c.ndtvimg.com/2023-03/v0obk3o_sultan-alneyadi-afp-650_625x300_02_March_23.jpg",
          "publishedAt": "2023-04-29T03:00:37Z",
          "content": "UAE astronaut Sultan Al-Neyadi has become the first Arab to undertake a spacewalk.\r\nDubai: UAE astronaut Sultan Al-Neyadi has become the first Arab to undertake a spacewalk during Expedition 69 ventu… [+3921 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "‘13 games since Shaw scored a fifty’: Ponting launches no-holds-barred attack - Hindustan Times",
          "description": "Ricky Ponting didn't shy away from mentioning the reasons behind dropping Prithvi Shaw from the XI during the side's game against SRH earlier this week. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/its-been-13-games-since-shaw-scored-a-fifty-ponting-launches-no-holds-barred-attack-on-out-of-form-dc-opener-101682734731226.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/29/1600x900/prithvi_ponting_1682737032751_1682737039114.png",
          "publishedAt": "2023-04-29T02:59:27Z",
          "content": "The Delhi Capitals have endured a poor season so far, as they reel at the bottom of the table with only two wins in seven matches. Their batting has been a major concern this year and it doesn't help… [+1639 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "NDTV News"
          },
          "author": null,
          "title": "US H-1B Visa Lottery System Resulted In Abuse, Fraud, Says Federal Agency - NDTV",
          "description": "The computerised drawing of lots devised to select successful H-1B applicants every year has resulted in abuse of the system and a sharp increase in fraudulent efforts, a federal agency said on Friday.",
          "url": "https://www.ndtv.com/world-news/us-h-1b-visa-lottery-system-resulted-in-abuse-fraud-says-federal-agency-3989714",
          "urlToImage": "https://i.ndtvimg.com/i/2018-04/us-visa-us-immigration-istock_650x400_41524626692.jpg",
          "publishedAt": "2023-04-29T02:34:45Z",
          "content": "USCIS said it is in the process of initiating law enforcement referrals for criminal prosecution.\r\nWashington: The computerised drawing of lots devised to select successful H-1B applicants every year… [+2820 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "DailyO"
          },
          "author": "Shaurya Thapa",
          "title": "Science Wrap: The oral sex and throat cancer link, a sun halo in Prayagraj, second-deepest blue hole - DailyO",
          "description": "Last week in science was marked by major space crash updates. While Japan's Hakuto-R M1 crashed on the Moon, last week's SpaceX Starship launch (with the rocket itself blowing up midway) is raising environmental concerns. Meanwhile, the Blue Planet has now di…",
          "url": "https://www.dailyo.in/news/science-wrap-the-oral-sex-and-throat-cancer-link-a-sun-halo-in-prayagraj-second-deepest-blue-hole-39590",
          "urlToImage": "https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202304/throat-cancer-caused-by-oral-sex-a-rare-circle-rainbow-the-debris-of-a-spacex-launch-dominate-this-weeks-science-news-photo-dailyo280423062435.jpeg",
          "publishedAt": "2023-04-29T02:30:00Z",
          "content": "Last week in science was marked with major space crash updates. While Japan's Hakuto-R M1 crashed on the Moon, last week's SpaceX Starship launch (with the rocket itself blowing up midway) is raising… [+4549 chars]"
          },
          {
          "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
          },
          "author": "Ratna Bhushan and Chaitali Chakravarty",
          "title": "Rural markets are aspirationally emulating urban India, says Nestle India Chairman - Economic Times",
          "description": "Nestle India has reported its highest growth in a decade, posting a 20.43% rise in sales for the March quarter. Chairman Suresh Narayanan has attributed the boost to a surge in aspirations from consumers in rural areas and small towns, who now mirror those of…",
          "url": "https://economictimes.indiatimes.com/industry/cons-products/fmcg/rural-markets-are-aspirationally-emulating-urban-india-says-nestle-india-chairman/articleshow/99857425.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-99857470,width-1070,height-580,imgsize-50008,overlay-economictimes/photo.jpg",
          "publishedAt": "2023-04-29T00:38:00Z",
          "content": "There's a transformation taking place in consumption with people in rural areas and small towns mirroring the aspirations of urban ones, Nestle India chairman Suresh Narayanan said in an interview.\"R… [+4601 chars]"
          },
          {
          "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
          },
          "author": "Sai Ishwarbharath",
          "title": "Over 90% of Wipro’s freshers chose lower salary option: CFO Jatin Dalal - The Economic Times",
          "description": "In February, Pune-based labour union Nascent Information Technology Employees Senate (NITES) had filed a complaint against the company with the central labour ministry alleging  unethical reduction  in salary offers of more than 4,000 candidates.",
          "url": "https://economictimes.indiatimes.com/tech/information-tech/over-90-of-wipros-freshers-chose-lower-salary-option-cfo-jatin-dalal/articleshow/99853302.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-99853373,width-1070,height-580,imgsize-30670,overlay-ettech/photo.jpg",
          "publishedAt": "2023-04-29T00:30:00Z",
          "content": "About 92% of Wipros new campus hires who were offered a lower salary option in order to fast-track onboarding have accepted the companys offer, a top executive told ET.Last year, the Bengaluru-based … [+3636 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Mid-day"
          },
          "author": null,
          "title": "100-year-old BCG vaccine does not protect against Covid-19: Study - mid-day.com",
          "description": "A Murdoch Children's led study, published in Clinical & Translational Immunology last year, also showed that the BCG vaccine did provide an immune response consistent with protection against severe Covid-19",
          "url": "https://www.mid-day.com/lifestyle/health-and-fitness/article/100-year-old-bcg-vaccine-does-not-protect-against-covid-19-study-23283374",
          "urlToImage": "https://images.mid-day.com/images/images/2023/apr/covid-twenty-eight-april_d.jpg",
          "publishedAt": "2023-04-28T19:12:00Z",
          "content": "A Murdoch Children's led study, published in Clinical &amp; Translational Immunology last year, also showed that the BCG vaccine did provide an immune response consistent with protection against seve… [+3249 chars]"
          },
          {
            "source": {
            "id": null,
            "name": "NewsBytes"
            },
            "author": "Sanjana Shankar",
            "title": "China's journey to the Moon: Major accomplishments and future plans - NewsBytes",
            "description": "China has an interesting lineup of missions to the Moon in the coming years",
            "url": "https://www.newsbytesapp.com/news/science/china-s-ambitious-plans-include-landing-astronauts-on-moon-by-2030/story",
            "urlToImage": "https://i.cdn.newsbytesapp.com/images/l16020230428210322.jpeg",
            "publishedAt": "2023-04-28T16:07:07Z",
            "content": "China's journey to the Moon: Major accomplishments and future plans\r\nChina has an interesting line-up of missions to the Moon in the coming years. \r\n In a recent interview, Weiren Wu, chief designer … [+3996 chars]"
          },
          {
          "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
          },
          "author": "TIMESOFINDIA.COM",
          "title": "Badminton Asia Championships: Satwik-Chirag pair ensures men's doubles medal after 52 years - Times of India",
          "description": "Badminton News: India's top men's doubles pair Satwiksairaj Rankireddy and Chirag Shetty scripted history by assuring a men's doubles medal at the Badminton Asia Cham",
          "url": "https://timesofindia.indiatimes.com/sports/badminton/badminton-asia-championships-satwik-chirag-pair-ensures-mens-doubles-medal-after-52-years/articleshow/99853452.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-99853467,width-1070,height-580,imgsize-46804,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-04-28T17:03:00Z",
          "content": "NBA: Action pics of playoffs"
          },
          {
            "source": {
            "id": null,
            "name": "Universe Today"
            },
            "author": "Nancy Atkinson",
            "title": "JWST's MIRI Instrument is Having Problems Again - Universe Today",
            "description": "Last week, NASA shared a blog post saying they detected a sensor glitch associated with the James Webb Space Telescope’s Mid-Infrared Instrument (MIRI). For some reason, the sensor for MIRI’s Medium Resolution Spectroscopy (MRS) is receiving less light than e…",
            "url": "https://www.universetoday.com/161117/jwsts-miri-instrument-is-having-problems-again/",
            "urlToImage": "https://www.universetoday.com/wp-content/uploads/2022/04/1567217132517-JWST_MIRI-integration-with-ISIM_7_MIRI005_625.jpg",
            "publishedAt": "2023-04-28T19:50:07Z",
            "content": "Last week, NASA shared a blog post saying they detected a sensor glitch associated with the James Webb Space Telescopes Mid-Infrared Instrument (MIRI). For some reason, the sensor for MIRIs Medium Re… [+3090 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "TelecomTALK"
          },
          "author": "https://www.facebook.com/TelecomTalk/",
          "title": "OnePlus Pad Now Available for Pre-Order, What to Know - TelecomTalk",
          "description": "The OnePlus Pad will be available in two memory variants in India. The base variant with 8GB+128GB is priced at Rs 37,999, and the superior variant with 12GB+256GB is priced at Rs 39,999.",
          "url": "https://telecomtalk.info/oneplus-pad-unboxing-with-stylo-magnetic-keyboard-watch/699213/",
          "urlToImage": "https://telecomtalk.info/wp-content/uploads/2023/04/oneplus-pad-unboxing-video-watch-now-today.jpg",
          "publishedAt": "2023-04-28T14:37:08Z",
          "content": "OnePlus, the popular smartphone manufacturer, has finally availed its much-awaited tablet, the OnePlus Pad, for pre-orders in India. The tablet boasts some impressive specifications, including an 11.… [+1943 chars]"
          },
          {
          "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
          },
          "author": "PTI",
          "title": "Jet Airways CEO-Designate Sanjiv Kapoor quits - Times of India",
          "description": "India Business News: MUMBAI: A little over a year after coming on board to revive Jet Airways, the airline's CEO-Designate Sanjiv Kapoor has put in his papers.",
          "url": "https://timesofindia.indiatimes.com/business/india-business/jet-airways-ceo-designate-sanjiv-kapoor-quits/articleshow/99850167.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-99852447,width-1070,height-580,imgsize-614070,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-04-28T13:58:00Z",
          "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
          },
          {
          "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
          },
          "author": "TIMESOFINDIA.COM",
          "title": "'I have been unlucky in love': Salman Khan says 'Jinko chahta tha ki jaan banaye woh bhai bula rahi hai' - Times of India",
          "description": "While opening up about his commitment status, Salman Khan has said he has been ‘unlucky in love.' Basking the success of his latest 'Kisi Ka Bhai Kisi Ki Jaan', the actor, during a show on a news channel, confessed that there was a time when he thoug",
          "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/i-have-been-unlucky-in-love-salman-khan-says-jinko-chahta-tha-ki-jaan-banaye-woh-bhai-bula-rahi-hai-as-he-opens-up-about-his-relationship-status/videoshow/99845029.cms",
          "urlToImage": "https://timesofindia.indiatimes.com/photo/99845029/size-43672/99845029.jpg",
          "publishedAt": "2023-04-28T11:14:14Z",
          "content": "While opening up about his commitment status, Salman Khan\r\n has said he has been unlucky in love.' Basking the success of his latest 'Kisi Ka Bhai Kisi Ki Jaan', the actor, during a show on a news ch… [+372 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Sportskeeda"
          },
          "author": "Anuj Nitin Prabhu",
          "title": "\"They must have been on holiday for six months\" - Ravi Shastri slams Ajinkya Rahane's critics after his WTC final selection - Sportskeeda",
          "description": "Former Indian all-rounder and head coach Ravi Shastri hasn't held back in criticizing those who have questioned Ajinkya Rahane's selection in India's World Test Championship (WTC) final squad.",
          "url": "https://www.sportskeeda.com/cricket/news-they-must-holiday-six-months-ravi-shastri-slams-ajinkya-rahane-s-critics-wtc-final-selection",
          "urlToImage": "https://staticc.sportskeeda.com/editor/2023/04/3bfcb-16826784695266-1920.jpg",
          "publishedAt": "2023-04-28T10:50:54Z",
          "content": "Former Indian all-rounder and head coach Ravi Shastri hasn't held back in criticizing those who have questioned Ajinkya Rahane's selection in India's World Test Championship (WTC) final squad.\r\nWith … [+2015 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Zoom"
          },
          "author": "Srinjoy Chowdhury",
          "title": "Strong Message To Pakistan! Rajnath Singh Says All SCO Members Must Unitedly Fight Terrorism - Times Now",
          "description": "Singh said that all SCO countries have the opportunity to collectively fight terrorism, and it was necessary, particularly now as terrorists were using different tools, like crowd funding and social media.",
          "url": "https://www.timesnownews.com/india/strong-message-to-pakistan-rajnath-singh-says-all-sco-members-must-unitedly-fight-terrorism-article-99843978",
          "urlToImage": "https://static.tnn.in/thumb/msid-99843978,updatedat-1682678895572,width-1280,height-720,resizemode-75/99843978.jpg",
          "publishedAt": "2023-04-28T10:48:15Z",
          "content": "Daily Astro Predictions for All Zodiac Signs Today, April 28, 2023"
          },
          {
            "source": {
            "id": null,
            "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "147-foot asteroid 2023 HW5 nearing Earth today; NASA reveals its speed, distance, more - HT Tech",
            "description": "A massive asteroid 147 foot in diameter is on its way to make a close approach to planet Earth today. Here is what NASA has revealed about it.",
            "url": "https://tech.hindustantimes.com/tech/news/147foot-asteroid-2023-hw5-nearing-earth-today-nasa-reveals-its-speed-distance-more-71682749088286.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/04/29/1600x900/asteroid-4376061_1920_Pixabay_1682585575580_1682749271882.jpg",
            "publishedAt": "2023-04-29T06:23:04Z",
            "content": "We don't get to know about all the space objects that fly close to planet Earth. Though NASA does reveal information about spectacular celestial events taking place in space, like planet Jupiter bein… [+2047 chars]"
            },
          ]
          }
      }
        return data.json()
    })
    .then((respone)=>{
        progress(70)
        setarticles(respone.articles)
        setpage(1)
        settotalresults(respone.totalResults)
    })
    progress(100)
}

  return (
    <>
    <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={totalresults >= articles.length && totalresults !== articles.length}
          loader={<Spinner/>}>

      <div className="container">
        <div className="container mt-5">
            <div style={{height:"15px"}} className="mt-5"></div>
            <h3 className={`text-${mode==="dark"?"light":"dark"} mt-5`} >{errresults==null?"Breaking News at Your Fingertips: Download the QuickNews App and Stay Informed Anytime, Anywhere":errresults}</h3>
            </div>
              <div className='row'>
              {articles.map(Elements=>{
                return <div className={`my-3 col-md-4`} key={Elements.url}>
                        <Newsitems source={Elements.source.name} author={Elements.author} time={Elements.publishedAt} mode={mode} title={Elements.title} despription={Elements.description} imageurl={Elements.urlToImage} newurl={Elements.url}/>
                      </div>
          })}
          </div>
      </div>
    </InfiniteScroll>
    
  </>
  )
}
