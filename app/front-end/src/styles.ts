import styled from 'styled-components';

export const App = styled.main`
  background-color: #F1EFEF;
  color: #352F44;

  max-width: 1440px;
  min-height: calc(100vh - 1.55rem);
  padding: 1rem;

  h1 {
    text-align: center;
    font-size: 1.75rem;    
  }

  h2 {
    font-size: 1.5rem; 
    text-align: center;

    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  ul {
    display: flex; 
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1rem;

    list-style: none;

    li {
      background-color: #adc4ce80;

      padding: 1rem;
      border-radius: 20px;

      p {
        display: flex; 
        flex-direction: column;
        text-align: center;
        
      }
    }
  }

  .date {
    text-decoration: underline;
  }

  .temp {
    color: #125C13;
    font-weight: 600;
  }

  .humidity {
    color: #26577C;
  }

  .media {
    color: #125C13;
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
   h1 {
    text-align: left;
   }

   h2 {
    padding-left: 1rem;     
    text-align: left;
   }
  }

`;