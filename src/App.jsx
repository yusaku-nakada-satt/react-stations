// DO NOT DELETE

import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <header>
        <h1>Dog App</h1>
        <meta name="description" content="犬の画像を紹介するサイトです"></meta>
      </header>
      <body>
        <div>
          <p>犬の画像を紹介するサイトです。</p>
        </div>
        <div className="img">
          <img src="https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg" alt="dog"></img>
        </div>
      </body>
    </div>
  )
}
