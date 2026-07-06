import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-100 text-sm">
                   &copy; {new Date().getFullYear()} CineVerse. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <a
                        href="mailto:gaurangchhabra6308@gmail.com"
                        className="text-gray-100 hover:text-white transition-colors text-sm"
                    >
                        Email
                    </a>
                    <a
                        href="https://github.com/gaurangchhabra6308-jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-100 hover:text-white transition-colors text-sm"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.themoviedb.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-100 hover:text-white transition-colors text-sm"
                    >
                        Powered by TMDB
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
