import { classNames } from '@libs';
import { Header, Icon } from '@mywebsite/ui';
import styles from './index.module.css';

export function Index() {
  //https://themebing.com/html/amike/index.html
  // https://palun.netlify.app/

  return (
    <div className={styles.page}>
      <div className="h-screen bg-gray-800 flex flex-col flex-wrap">
        <Header />
        <section id="banner" className="flex-1">
          <div className="container mx-auto h-full flex items-center justify-start ">
            <div className="w-full md:w-1/2 flex items-center">
              <div className="lg:px-20">
                <div className="flex gap-8">
                  <a
                    href="https://www.linkedin.com/in/sagarllp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      name="linkedin"
                      className="hover:text-white transition-all duration-150"
                    />
                  </a>
                  <a
                    href="https://twitter.com/sagarllp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      name="twitter"
                      className="hover:text-white transition-all duration-150"
                    />
                  </a>
                  <a
                    href="https://github.com/sagarPakhrin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      name="github"
                      className="hover:text-white transition-all duration-150"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/sagarllp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      name="instagram"
                      className="hover:text-white transition-all duration-150"
                    />
                  </a>
                </div>
                <h1 className="mt-14 font-bold text-gray-300 text-4xl">
                  Sagar Lama <span className="text-orange-500">.</span>
                </h1>
                <p className="mt-3 text-xl font-medium text-white">
                  Software Engineer | Fullstack Developer
                </p>
                <a
                  href="#contact"
                  className={classNames(
                    'mt-6 inline-block text-white capitalize font-semibold border border-orange-500 px-4 py-3',
                    'transition-all duration-300',
                    'hover:bg-orange-700'
                  )}
                >
                  {' '}
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Index;
