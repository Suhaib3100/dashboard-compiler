"use client"
import {Fragment} from "react"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import { Icon } from "@iconify/react";
import PromotionalCard from "./promotional-card"
import InvoiceStats from "./invoice-stats"
import InvoiceListTable from "./invoice-list-table"
const InvoiceListPage = () => {
  return (
    <Fragment>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Utility</BreadcrumbItem>
        <BreadcrumbItem>Invoice List</BreadcrumbItem>
      </Breadcrumbs>
      <Card className="mt-6">
        <CardHeader className="flex-row items-center border-none mb-0">
          <CardTitle className="flex-1 text-xl font-medium text-default-900">Invoice Overview</CardTitle>
          <Button
            className="flex-none border-default-300 text-default-600 h-9 text-xs font-medium"
            variant="outline"
          >
            <Icon icon="heroicons:funnel" className="w-3.5 h-3.5 ltr:mr-0.5 rtl:ml-0.5" />
            Filter
            </Button>
        </CardHeader>
        <CardContent className="pt-0 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            <PromotionalCard />
            <InvoiceStats />
          </div>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardContent className="p-0">
          <InvoiceListTable />
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default InvoiceListPage;