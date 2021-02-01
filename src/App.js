import Header from './components/Header';
import Layout from './components/Layout'; 
import Footer from './components/Footer';

import bg1 from './assets/bg1.jpg';

import './App.css';

import './App.json'

const App = () => {
  const fl = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b52e4b6-1d4e-4a16-8859-0147b1f4ec81/bg2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210129T200547Z&X-Amz-Expires=86400&X-Amz-Signature=017e758b773d32ab7af525a87b6dba2cd206ea7356b5345bf42489d3242601a1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg2.jpg%22';
  return(
    <>
    <Header title = 'This is my title'
            descr = 'This is Description!'
    />;
    <Layout id = 'first'
            title = 'First layout'
            descr = 'First layout Description'
            urlBg = {bg1}
        >
            <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
               Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>  

            <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board)
                must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks'
                 of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will
                 be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's
                 color instead.</p>     
    </Layout>
    <Layout id = 'second'
            title = 'Second layout'
            descr = 'Second layout Description'
            colorBg = 'lightgreen'
    />;
    <Layout id = 'Third'
            title = 'Third layout'
            descr = 'Third layout Description'
            urlBg = {fl} 
    />;
    <Footer/>
    </>
  );
}

export default App;