// const PORT = 8000;
// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');

// const app = express()

// const newspapers = [
//     {
//         name: 'cityam',
//         address: 'https://www.cityam.com/london-must-become-a-world-leader-on-climate-change-action/',
//         base: ''
//     },
//     {
//         name: 'thetimes',
//         address: 'https://www.thetimes.co.uk/environment/climate-change',
//         base: ''
//     },
//     {
//         name: 'guardian',
//         address: 'https://www.theguardian.com/environment/climate-crisis',
//         base: '',
//     },
//     {
//         name: 'telegraph',
//         address: 'https://www.telegraph.co.uk/climate-change',
//         base: 'https://www.telegraph.co.uk',
//     },
//     {
//         name: 'nyt',
//         address: 'https://www.nytimes.com/international/section/climate',
//         base: '',
//     },
//     {
//         name: 'latimes',
//         address: 'https://www.latimes.com/environment',
//         base: '',
//     },
//     {
//         name: 'smh',
//         address: 'https://www.smh.com.au/environment/climate-change',
//         base: 'https://www.smh.com.au',
//     },
//     {
//         name: 'un',
//         address: 'https://www.un.org/climatechange',
//         base: '',
//     },
//     {
//         name: 'bbc',
//         address: 'https://www.bbc.co.uk/news/science_and_environment',
//         base: 'https://www.bbc.co.uk',
//     },
//     {
//         name: 'es',
//         address: 'https://www.standard.co.uk/topic/climate-change',
//         base: 'https://www.standard.co.uk'
//     },
//     {
//         name: 'sun',
//         address: 'https://www.thesun.co.uk/topic/climate-change-environment/',
//         base: ''
//     },
//     {
//         name: 'dm',
//         address: 'https://www.dailymail.co.uk/news/climate_change_global_warming/index.html',
//         base: ''
//     },
//     {
//         name: 'nyp',
//         address: 'https://nypost.com/tag/climate-change/',
//         base: ''
//     }
// ]

// const articles = [];

// newspapers.forEach(newspaper => {
//     axios.get(newspaper.address)
//     .then(response => {
//         const html = response.data
//         const $ = cheerio.load(html)

//         $('a:contains("climate")', html).each(function () {
//             const title = $(this).text()
//             const url = $(this).attr('href')

//             articles.push({
//                 title,
//                 url: newspaper.base + url,
//                 source: newspaper.name
//             })
//         })
//     })
// })

// app.get('/',(req, res)=>{
//     res.json('welcome to my ClimateChange News API')
// })

// // app.get('/news', (req, res) => {
// //     axios.get('https://www.theguardian.com/environment/climate-crisis')
// //       .then((response) => {
// //         const html = response.data;
// //         const $ = cheerio.load(html);
        
  
// //         $('a:contains("climate")', html).each(function () {
// //           const title = $(this).text();
// //           const url = $(this).attr('href');
// //           articles.push({
// //             title,
// //             url
// //           });
// //         });
  
// //         res.json(articles);
// //       })
// //       .catch((err) => console.log(err));
// //   });

// app.get('/news', (req,res)=>{
//     res.json(articles)
// })
 

// app.listen(PORT, ()=> console.log(`server running on PORT ${PORT}`))




//**********************************************
const PORT = 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const newspapers = [
    {
        name: 'cityam',
        address: 'https://www.cityam.com/london-must-become-a-world-leader-on-climate-change-action/',
        base: ''
    },
    {
        name: 'thetimes',
        address: 'https://www.thetimes.co.uk/environment/climate-change',
        base: ''
    },
    {
        name: 'guardian',
        address: 'https://www.theguardian.com/environment/climate-crisis',
        base: '',
    },
    {
        name: 'telegraph',
        address: 'https://www.telegraph.co.uk/climate-change',
        base: 'https://www.telegraph.co.uk',
    },
    {
        name: 'nyt',
        address: 'https://www.nytimes.com/international/section/climate',
        base: '',
    },
    {
        name: 'latimes',
        address: 'https://www.latimes.com/environment',
        base: '',
    },
    {
        name: 'smh',
        address: 'https://www.smh.com.au/environment/climate-change',
        base: 'https://www.smh.com.au',
    },
    {
        name: 'un',
        address: 'https://www.un.org/climatechange',
        base: '',
    },
    {
        name: 'bbc',
        address: 'https://www.bbc.co.uk/news/science_and_environment',
        base: 'https://www.bbc.co.uk',
    },
    {
        name: 'es',
        address: 'https://www.standard.co.uk/topic/climate-change',
        base: 'https://www.standard.co.uk'
    },
    {
        name: 'sun',
        address: 'https://www.thesun.co.uk/topic/climate-change-environment/',
        base: ''
    },
    {
        name: 'dm',
        address: 'https://www.dailymail.co.uk/news/climate_change_global_warming/index.html',
        base: ''
    },
    {
        name: 'nyp',
        address: 'https://nypost.com/tag/climate-change/',
        base: ''
    }
]


const fetchArticles = async () => {
  const articles = [];

  // Use Promise.all to wait for all Axios requests to complete
  await Promise.all(
    newspapers.map(async (newspaper) => {
      try {
        const response = await axios.get(newspaper.address);
        const html = response.data;
        const $ = cheerio.load(html);

        $('a:contains("climate")', html).each(function () {
          const title = $(this).text();
          const url = $(this).attr('href');

          articles.push({
            title,
            url: newspaper.base + url,
            source: newspaper.name
          });
        });
      } catch (error) {
        console.error(`Error fetching articles for ${newspaper.name}: ${error.message}`);
      }
    })
  );

  return articles;
};

app.get('/', (req, res) => {
  res.json('Welcome to my ClimateChange News API');
});

app.get('/news', async (req, res) => {
  try {
    const articles = await fetchArticles();
    res.json(articles);
  } catch (error) {
    console.error(`Error fetching articles: ${error.message}`);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
