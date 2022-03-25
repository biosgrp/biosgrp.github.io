import styled from "styled-components";
import portfolioData from "../data/portfolio.json";

function split(array, n) {
  let [...arr] = array;
  const chunkSize = Math.ceil(array.length / n);
  var res = [];
  while (arr.length) {
    res.push(arr.splice(0, chunkSize));
  }
  return res;
}

const PortfolioContainer = styled.div`
  padding: 10em 8em 0em;
`;

export const Portfolio = (props) => {
  const columns = split(portfolioData, 2);

  return (
    <PortfolioContainer id="portfolio">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 col-xl-3">
          <h2>
            <span className="textDark">Port</span>
            <span className="textLight">folio</span>
          </h2>
        </div>
        <div className="col-12 col-lg-6 col-xl-9">
          <div className="row list-style">
            <div className="col-12 col-md-6">
              {columns[0].map((c) => (
                <ul key={c}>{c}</ul>
              ))}
            </div>
            <div className="col-12 col-md-6">
              {columns[1].map((c) => (
                <ul key={c}>{c}</ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortfolioContainer>
  );
};
