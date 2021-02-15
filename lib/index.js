const apiUrl = "https://myapi.ga/";

const config = {
  apiUrl
};

export default config;

export function formatCoin({ key, value, info }) {
  return {
    name: key,
    zar: value.length && value[0].amount,
    usd: value.length && value[1].amount,
    img: info && `https://www.cryptocompare.com${info.img}`,
    fullname: info && info.fullname
  };
}
