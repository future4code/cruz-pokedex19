import styled from 'styled-components'


export const Image= styled.img`
    height: 150px;
    width: 150px; 
    z-index : 3;
    @media screen and (max-width: 700px){
        height: 80px;
        width: 80px; 
  }
`
export const Div = styled.div`
    height: 250px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
    overflow: hidden;
    position: relative;
    border-radius:8px ;
    border: 2px solid black;
    background-color: #aeaaaa;
    font-family: 'Press Start 2P', cursive;
    @media screen and (max-width: 700px){
        height: 150px;
        width: 150px; 
  }
`
export const Name = styled.h4`
    color: white;
    text-align: center;
    text-transform: capitalize;
    font-size: 20px;
    
    @media screen and (max-width: 700px){
        font-size: 12px;
    }
`

export const TitleContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    background-color: red;
    border-bottom: 2px solid black;
    @media screen and (max-width: 700px){
        height: 25px;
         
  }
`

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 3px;
    display: flex;
    justify-content: center;
    width: 100%;
`
export const TypeContainer = styled.div`
     
     height: 20px;
     width: 80px;
     padding: 4px;
     margin: 5px;
     border-radius: 5px;
     text-align: center;
     text-transform: uppercase;
     letter-spacing: 1px;
     font-size: 14px;
     @media screen and (max-width: 700px){
        height: 10px;
        width: 60px; 
        font-size: 10px;
  }
     
`
export const ButtonPrimary = styled.button`
    border-radius: 5%;
    height: 30px;
    width: 80px;
    margin: 5px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    font-size: 8px;
    z-index: 4;
    @media screen and (max-width: 700px){
        height: 10px;
        width: 60px; 
        font-size: 5px;
  }
`