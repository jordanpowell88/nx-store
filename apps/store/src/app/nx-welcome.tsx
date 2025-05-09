/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function NxWelcome({ title }: { title: string }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .shadow {
      box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    .rounded {
      border-radius: 1.5rem;
    }
    #welcome {
      margin-top: 2.5rem;
    }
    #welcome h1 {
      font-size: 3rem;
      font-weight: 500;
      letter-spacing: -0.025em;
      line-height: 1;
    }
    #welcome span {
      display: block;
      font-size: 1.875rem;
      font-weight: 300;
      line-height: 2.25rem;
      margin-bottom: 0.5rem;
    }
    #hero {
      align-items: center;
      background-color: hsla(214, 62%, 21%, 1);
      border: none;
      box-sizing: border-box;
      color: rgba(55, 65, 81, 1);
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 3.5rem;
    }
    #hero .text-container {
      color: rgba(255, 255, 255, 1);
      padding: 3rem 2rem;
    }
    #hero .text-container h2 {
      font-size: 1.5rem;
      line-height: 2rem;
      position: relative;
    }
    #hero .text-container h2 svg {
      color: hsla(162, 47%, 50%, 1);
      height: 2rem;
      left: -0.25rem;
      position: absolute;
      top: 0;
      width: 2rem;
    }
    #hero .text-container h2 span {
      margin-left: 2.5rem;
    }
    #hero .text-container a {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 0.75rem;
      color: rgba(55, 65, 81, 1);
      display: inline-block;
      margin-top: 1.5rem;
      padding: 1rem 2rem;
      text-decoration: inherit;
    }
    #hero .logo-container {
      display: none;
      justify-content: center;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    #hero .logo-container svg {
      color: rgba(255, 255, 255, 1);
      width: 66.666667%;
    }
    @media screen and (min-width: 768px) {
      #hero {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      #hero .logo-container {
        display: flex;
      }
    }
          `,
        }}
      />
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome {title} 👋
            </h1>
          </div>

          <div id="hero" className="rounded">
            <div className="text-container">
              <h2>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span>You&apos;re up and running</span>
              </h2>
            </div>
            <div className="logo-container">
              <svg
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
