// temp
const axios = require('axios');
const getLogo = require('./index').getLogo;

axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTMwMTk2MjksImNsaWVudElkIjoiY2oxa3I3bm42MGNqajAxNjI4dzU0Z25xMyJ9.15DnFLpWkMXV7AmfgAVZy4TD5gak4rT-X4DzkjGbRrc';

const allLinks = [
  {
    "id": "cjb5ir8xffhs00183n6rb75ji",
    "url": "https://orioniconlibrary.com/app"
  },
  {
    "id": "cjb6bkp8yv9r60124m92y652q",
    "url": "https://walkingmen.com/"
  },
  {
    "id": "cjb6m2clk1qo60101gjynb2hc",
    "url": "http://www.benmingo.com/"
  },
  {
    "id": "cjb99vg6zo5ve010143cbtj71",
    "url": "https://draftjs.org/"
  },
  {
    "id": "cjb9o4pao3q060113uwq0d2vm",
    "url": "https://react.christmas/13"
  },
  {
    "id": "cjb9o5oyl3qaf0113pib7f8rl",
    "url": "https://react.christmas/"
  },
  {
    "id": "cjb9o8alc3r1n0113raqzsuzd",
    "url": "https://github.com/airbrite/celery-api#orders-resource"
  },
  {
    "id": "cjban4qimh2at0130upginx5c",
    "url": "http://instagram.com/mnml.la"
  },
  {
    "id": "cjbaq5rgviflr019242nmx3xl",
    "url": "https://orioniconlibrary.com/app"
  },
  {
    "id": "cjbb6sf6gppiy0113rdal8x2b",
    "url": "https://www.fespa.com/en/news-media/blog/7-lessons-printful-learned-from-opening-its-first-print-facility-in-europe"
  },
  {
    "id": "cjbbwpcmnzddl01300q93nljh",
    "url": "https://www.fespa.com/en/news-media/blog/7-lessons-printful-learned-from-opening-its-first-print-facility-in-europe"
  },
  {
    "id": "cjbbxhku8zrik0190iub7i6tw",
    "url": "https://help.shopify.com/api/tutorials/sell-through-the-checkout-api"
  },
  {
    "id": "cjbc5el0a4mfs0130x5zx81s7",
    "url": "https://team.redcollar.digital/"
  },
  {
    "id": "cjbcnfwekdfih0113ro4sdqds",
    "url": "tienp.me"
  },
  {
    "id": "cjbcohv9vdypb0133qrptqonc",
    "url": "https://metropolia.fi"
  },
  {
    "id": "cjbdk6ebsxyzr0192twwb5e6t",
    "url": "https://uijar.com/?ref=producthunt"
  },
  {
    "id": "cjbdlm3i4yq9p0130enel0hnc",
    "url": "lempea.io"
  },
  {
    "id": "cjboof4xs2qls01800l1zc2fs",
    "url": "http://evoulve.com/"
  },
  {
    "id": "cjboofr6u2h4a01437rw64rly",
    "url": "https://readymag.com/repponen/20inventions/"
  },
  {
    "id": "cjboom7532kr30143hrl18teu",
    "url": "https://uppy.io/"
  },
  {
    "id": "cjbth9xvosiqr0115gun4ba8a",
    "url": "https://getcraftwork.com"
  },
  {
    "id": "cjbytqfhwl5bt0121gu4yy1ee",
    "url": "https://www.coursera.org/learn/basic-statistics"
  },
  {
    "id": "cjc0csgl54q650121hxlzvnhr",
    "url": "https://docs.google.com/spreadsheets/d/11Z__WV1tBO3uq7L4Qyj5cPlb5Asa4EmDC5NVsiWD3iw/edit#gid=0"
  },
  {
    "id": "cjc0g76lb93600196srrm70u1",
    "url": "https://www.youtube.com/watch?v=EAyk2OsKvtU"
  },
  {
    "id": "cjc0lgg7mb6xq0196xnwtb2ba",
    "url": "https://www.rstudio.com/online-learning"
  },
  {
    "id": "cjc1qf1yox6x70196sr4cdyoa",
    "url": "https://resourcingmachine.veolia.com/machines/joure/"
  },
  {
    "id": "cjc344rksc8nz0166ay350kp4",
    "url": "https://www.adidas.fi/speedfactory"
  },
  {
    "id": "cjc36fo4od4jq012669bjgowi",
    "url": "http://olegkukharuk.com"
  },
  {
    "id": "cjc3bbsa9g36v0147a3z44ars",
    "url": "https://www.lucidchart.com"
  },
  {
    "id": "cjc4fz17gwu6o0166blltwi48",
    "url": "https://brandmentions.com/"
  },
  {
    "id": "cjc4g0cokwuxn0166ymy15i0a",
    "url": "https://www.intercom.com/"
  },
  {
    "id": "cjc4g11ntwv0t01666las89yk",
    "url": "https://www.oberlo.com/"
  }
];

allLinks.forEach(({ id, url }) =>
  getLogo(url).then((result) => {
    return result.icon;
  }).then((icon) => icon && axios.post('https://api.graph.cool/simple/v1/cjb2kuh501pwz0146bk89ad6j', {
    query: `
    mutation updateIcons($linkId: ID!, $icon: String!) {
      updateLink(id:$linkId, icon: $icon) {
        id
        url
        icon
      }
    }`,
    operationName: 'updateIcons',
    variables: {
      linkId: id,
      icon
    }
  }).then(({ data, errors }) => {
    console.log(errors || data);

  }))
)
