import { Header } from '@mywebsite/ui';
import styles from './index.module.css';

export function Index() {
  //https://themebing.com/html/amike/index.html
  // https://palun.netlify.app/

  return (
    <div className={styles.page}>
      <div className="h-screen bg-gray-800 flex flex-col flex-wrap">
        <Header />
        <section id="banner" className="flex-1">
          <div className="container mx-auto h-full">
            <div className="w-full md:w-1/2 flex items-center">
              <div>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/sagarllp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://github.com/sagarPakhrin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
                <h1>Sagar Lama</h1>
                <p></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Index;
