export const Footer: React.FC = () => {
    return (
        <footer className="dark:bg-slate-700 dark:text-white bg-slate-200">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center text-yellow-800 dark:text-yellow-200">© {`${new Date().getFullYear()} `}
                <a href="#" className="hover:underline">
                        Warner Hurtado
                </a>.
                    Derechos Reservados
                </span> 
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> 
                    <li> 
                        <a href="#" className="hover:underline me-4 md:me-6" >
                            Sobre mí
                        </a> 
                    </li> 
                    <li> 
                        <a href="#" className="hover:underline" >
                            Contacto
                        </a> 
                    </li> 
                </ul> 
            </div>
        </footer>
    );
};
