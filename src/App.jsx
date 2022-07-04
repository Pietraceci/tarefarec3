import "./App.css"
import News from './News'

function App(){
    const valores = [
        "linux", "docker", "server", "rails", "douane", "my-developments","command-line", "ruby", "c-2", "linux-on-mac", "maintenance", "security", "gnome", "kubernetes", "mes-developpements", "ubuntu", "python", "vcs", "capybara", "contribution", "git", "apt","bazaar", "chef", "cucumber", "debian", "game", "howto", "packaging", "testing", "boost", "debug","devise", "elixir", "gtk", "homebrew", "information", "ssh", "tuxtremsplit", "xpath"
    ];

    const lista = valores.map(
        (c)=> 
        <p className='box'>{c}</p>
      );

	return(
        <div className='content'>
            {lista}
        </div>

    );

}
export default App;