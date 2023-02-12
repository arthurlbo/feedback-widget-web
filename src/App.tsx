import { useEffect } from 'react';
import { ThemeSwitch } from './Components/ThemeSwitch';
import { Widget } from './Components/Widget';

export function App() {
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            
        } else {
            document.documentElement.classList.remove('dark');
        }
    });

    return (
        <>
            <header className="w-full h-[72px] bg-zinc-100  dark:bg-zinc-800  flex items-center justify-center drop-shadow-sm ">
                <div className="w-40 h-10 rounded-lg  my-auto bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600 "></div>

                <nav className="h-3 gap-6 mx-40 my-auto flex items-center justify-center">
                    <div className="w-24 h-3 rounded-full bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                    <div className="w-24 h-3 rounded-full bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                    <div className="w-24 h-3 rounded-full bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                    <div className="w-24 h-3 rounded-full bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                </nav>

                <div className="w-8 h-8 my-auto rounded-lg bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600 "></div>

                <ThemeSwitch />

                <div className="w-12 h-12 my-auto rounded-full bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600 ml-4 "></div>
            </header>

            <main className="mt-8">
                <div className="w-[1120px] mx-auto mt-4 ">
                    <div className="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg h-[124px] justify-center flex flex-row mb-8 ">
                        <p className="ml-14 text-zinc-500 dark:text-zinc-400 m-auto">
                            Experimente enviar um feedback de um bug na
                            aplicação &#128516;
                        </p>
                    </div>

                    <div className="w-full flex flex-wrap gap-8">
                        <div className="w-[352px] h-[310px] rounded-lg  bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"></div>
                        <div className="w-[352px] h-[310px] rounded-lg  bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"></div>
                        <div className="w-[352px] h-[310px] rounded-lg  bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"></div>
                    </div>
                </div>
            </main>

            <Widget />
        </>
    );
}
