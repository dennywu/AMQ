﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AsliMotor.Helper;
using AsliMotor.Security.Models;

namespace AsliMotor.Controllers
{
    [MyAuthorize(Roles=RoleName.OWNER_ADMINISTRATOR)]
    public class AngsuranReportController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}