using Microsoft.AspNetCore.Mvc;
using sample.Models;
using System.Diagnostics;

namespace sample.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
       
        public IActionResult blog()
        {
            return View();
        }
        public IActionResult donation()
        {
            return View();
        }

        public IActionResult about()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Contact()
        {
            ViewBag.Message = "Please fill out the contact form.";
            return View();
        }

        [HttpPost]
        public IActionResult Contact(string name, string email, string message)
        {
            if (name == "Daniyal" && email == "Daniyal@gmail.com")
            {
                ViewData["Response"] = "Your response has been submitted!";
            }
            else
            {
                TempData["Alert"] = "Your email or username may not be correct!";
                ViewData["Response"] = "Please try again.";
            }

            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
