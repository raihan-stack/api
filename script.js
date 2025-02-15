
const countryList ={
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };
  console.log(countryList["ZWD"])
  const Base_URl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdown = document.querySelectorAll(".dropdawn select ")




const btn = document.querySelector("button")

const formCurr = document.querySelector(".slect select")

const toCurr = document.querySelector(".select2 select")
const msg = document.querySelector(".msg")
for(let select of dropdown){
  for(let curCode  in countryList){
    const newOption = document.createElement("option")
    newOption.innerHTML = curCode;
    newOption.value =curCode;
   
    if(select.name ==="from" && curCode === "USD"){
      newOption.selected = "selected"
    } else if (select.name  === "to" && curCode ==="IND" ){
        newOption.selected = "selected"
    }
    select.append(newOption)
  }
select.addEventListener("change",(advt)=>{
  updateFlag(advt.target)
  f(advt.target)
})


}

const updateFlag = (e)=>{

  console.log(e)
let code = e.value
console.log(code)
let countryFlag = countryList[code]


let updateFlag = `https://flagsapi.com/${countryFlag}/flat/64.png`

let img =  e.parentElement.querySelector("img")
img.src = updateFlag
}



btn.addEventListener("click",async (e)=>{
  e.preventDefault();
  const input = document.querySelector ("form input")

  const amtval= input.value;

console.log(amtval)


  if(amtval === "" ||amtval > 1){
 
   console.log(amtval)
   input.value = "1"
   console.log(formCurr.value)
   console.log(toCurr.value)
  
  }

  const url = `${Base_URl}/${formCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}`

  let response = await fetch(url)
  let data = await response.json()

  const rate = data[toCurr.value.toLowerCase()]

  const finalAmount = amtval*rate

  msg.innerText = `${amtval} ${formCurr} = ${finalAmount} ${toCurr}`
  console.log(response)
})