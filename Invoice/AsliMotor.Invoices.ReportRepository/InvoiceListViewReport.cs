﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BonaStoco.Inf.Data.ViewModel;

namespace AsliMotor.Invoices.ReportRepository
{
    [NamedSqlQuery("findListView", @"select  inv.id,
	inv.invoiceno,
	inv.status,
	inv.invoicedate,
	inv.price,
	inv.outstanding,
	p.nopolisi,
	p.type,
	cust.name as CustomerName
	from invoicesnapshot inv 
	inner join product p on inv.productid = p.id
	inner join customer cust on inv.customerid = cust.id
	where inv.branchid = @branchid
	ORDER BY inv.invoiceno asc
	LIMIT 10 OFFSET @offset")]
    public class InvoiceListViewReport:IViewModel
    {
        public Guid id { get; set; }
        public long InvoiceNo { get; set; }
        public int Status { get; set; }
        public DateTime InvoiceDate { get; set; }
        public string NoPolisi { get; set; }
        public string Type { get; set; }
        public decimal Price { get; set; }
        public decimal Outstanding { get; set; }
        public string CustomerName { get; set; }
    }
}
