"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import Flatpickr from "react-flatpickr";
import { Label } from "@/components/ui/label";
import { Euro, Plus, Trash2, Upload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";

const InvoicePage = () => {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Utility</BreadcrumbItem>
        <BreadcrumbItem>Create Invoice</BreadcrumbItem>
      </Breadcrumbs>
      <div className="invoice-wrapper mt-6 ">
        <div className="grid grid-cols-12 gap-6">
          <Card className="col-span-12 xl:col-span-8 ">
            <CardHeader className="sm:flex-row sm:items-center gap-3">
              <div className="flex-1 text-xl font-medium text-default-700 whitespace-nowrap">Create Invoice</div>
              <div className="flex-none flex items-center gap-4">
                <Button>Save As PDF <Icon icon="heroicons:document-text" className="w-5 h-5 ltr:ml-2 rtl:mr-2" /></Button>
                <Button className="border-default-300 group" size="icon" variant="outline" >
                  <Icon icon="heroicons:printer" className="w-5 h-5 text-default-300 group-hover:text-default-50 dark:group-hover:text-primary-foreground" />
                </Button>
                <Button className="border-default-300 group" size="icon" variant="outline">
                  <Icon icon="heroicons:arrow-path" className="w-5 h-5 text-default-300 group-hover:text-default-50 dark:group-hover:text-primary-foreground" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[250px]">
                  <div className="w-full md:w-[248px] space-y-2">
                    <Input type="text" placeholder="Invoice Name" size="lg" />
                    <Input type="text" placeholder="Invoice ID" size="lg" />
                    <div className="relative">
                      <Flatpickr
                        className="w-full border border-default-300 bg-background text-default-500  focus:outline-none h-10 rounded-md px-2 placeholder:text-default-500"
                        placeholder="Invoice Date"
                      />
                      <Icon icon="heroicons:calendar-days" className="w-5 h-5 absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 text-default-400" />
                    </div>
                    <div className="relative">
                      <Flatpickr
                        className="w-full border border-default-300 bg-background text-default-500  focus:outline-none h-10 rounded-md px-2 placeholder:text-default-500"
                        placeholder="Due Date"
                      />
                      <Icon icon="heroicons:calendar-days" className="w-5 h-5 absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 text-default-400 " />
                    </div>
                    <div className="flex items-center gap-1.5 pt-2">
                      <Button
                        className="w-5 h-5 rounded-md bg-transparent hover:bg-transparent p-0"
                        variant="outline">
                        <Plus className="w-3.5 h-3.5 text-default-500" />
                      </Button>
                      <span className="text-xs font-medium text-default-600"> Add More Fields</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 md:flex-none flex flex-col items-end w-[222px] min-w-[222px]">
                  <Label
                    htmlFor="uploadFile"
                    className="cursor-pointer  w-full md:w-[220px] h-[180px] bg-default-100 dark:bg-default-50 rounded-md flex justify-center items-center">
                    <div className="flex flex-col items-center w-full">
                      <Upload className="ltr:mr-2 rtl:ml-2 h-7 w-7 mb-2 text-primary" />
                      <span className="text-sm font-medium text-primary">Upload Logo</span>
                    </div>
                    <Input type="file" className="hidden" id="uploadFile" />
                  </Label>
                  <div className="mt-2 text-[10px] text-default-600">240 x 240 pixels @ 72 DPI, Maximum size of  1MB to 3.5MB.</div>
                </div>
              </div>
              <div className="mt-8 flex justify-between flex-wrap gap-4">
                <div className="w-full 2xl:max-w-[400px] space-y-2">
                  <div className="text-base font-semibold text-default-800 pb-1">Billing From:</div>
                  <Input type="text" placeholder="Company Name" />
                  <Input type="email" placeholder="Company Email" />
                  <Input type="number" placeholder="Company Phone No" />
                  <Textarea placeholder="Comapny Address" />
                </div>
                <div className="w-full 2xl:max-w-[400px] space-y-2">
                  <div className="text-base font-semibold text-default-800 pb-1">Billing To:</div>
                  <Input type="text" placeholder="Customer Name" />
                  <Input type="email" placeholder="Customer Email" />
                  <Input type="number" placeholder="Customer Phone No" />
                  <Textarea placeholder="Customer Address" />
                </div>
              </div>
              <div className="border border-default-300 rounded-md mt-9">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-default-600 uppercase">Item</TableHead>
                        <TableHead className="text-default-600 uppercase">Quantity</TableHead>
                        <TableHead className="text-default-600 uppercase">Rate</TableHead>
                        <TableHead className="text-default-600 uppercase text-end pr-7">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="[&_tr:last-child]:border-1">
                      <TableRow>
                        <TableCell className="min-w-[220px] w-full max-w-[432px]">
                          <Input
                            type="text"
                            placeholder="Gaming Mouse & Keyboard Combo"
                            className="text-default-800 rounded "
                          />
                        </TableCell>
                        <TableCell>
                          <div className="max-w-[130px] flex">
                            <Input
                              className="w-[70px] appearance-none accent-transparent rounded ltr:rounded-r-none ltr:border-r-0 rtl:rounded-l-none rtl:border-l-0"
                              type="number"
                              defaultValue="1"
                            />
                            <Select>
                              <SelectTrigger className="rounded ltr:rounded-l-none rtl:rounded-r-none h-9  pr-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:mt-1 ">
                                <SelectValue placeholder="pcs" />
                              </SelectTrigger>
                              <SelectContent >
                                <SelectItem value="pcs">pcs</SelectItem>
                                <SelectItem value="kg">kg</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="max-w-[130px] flex">
                            <Input
                              className="w-[70px] appearance-none accent-transparent rounded ltr:rounded-r-none ltr:border-r-0 rtl:rounded-l-none rtl:border-l-0"
                              type="number"
                              defaultValue="20"
                            />
                            <Select>
                              <SelectTrigger className="rounded ltr:rounded-l-none rtl:rounded-r-none h-9  pr-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:mt-1 ">
                                <SelectValue placeholder="usd" />
                              </SelectTrigger>
                              <SelectContent >
                                <SelectItem value="usd">usd</SelectItem>
                                <SelectItem value="eur">eur</SelectItem>
                                <SelectItem value="jpy">jpy</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 ">
                            <Input defaultValue="$1663.00" className="text-end font-medium  text-default-900 rounded min-w-[140px]" />
                            <Trash2 className="w-4 h-4 text-warning" />
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="min-w-[220px] w-full max-w-[432px]">
                          <Input
                            type="text"
                            placeholder="Description of item"
                            className="text-default-800 rounded "
                          />
                        </TableCell>
                        <TableCell>
                          <div className="max-w-[130px] flex">
                            <Input
                              className="w-[70px] appearance-none accent-transparent rounded ltr:rounded-r-none ltr:border-r-0 rtl:rounded-l-none rtl:border-l-0"
                              type="number"
                              defaultValue="1"
                            />
                            <Select>
                              <SelectTrigger className="rounded ltr:rounded-l-none rtl:rounded-r-none h-9  pr-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:mt-1 ">
                                <SelectValue placeholder="pcs" />
                              </SelectTrigger>
                              <SelectContent >
                                <SelectItem value="pcs">pcs</SelectItem>
                                <SelectItem value="kg">kg</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="max-w-[130px] flex">
                            <Input
                              className="w-[70px] appearance-none accent-transparent rounded ltr:rounded-r-none ltr:border-r-0 rtl:rounded-l-none rtl:border-l-0"
                              type="number"
                              defaultValue="20"
                            />
                            <Select>
                              <SelectTrigger className="rounded ltr:rounded-l-none rtl:rounded-r-none h-9  pr-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:mt-1 ">
                                <SelectValue placeholder="usd" />
                              </SelectTrigger>
                              <SelectContent >
                                <SelectItem value="usd">usd</SelectItem>
                                <SelectItem value="eur">eur</SelectItem>
                                <SelectItem value="jpy">jpy</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 ">
                            <Input defaultValue="$0.00" className="text-end font-medium  text-default-900 rounded min-w-[140px]" />
                            <Trash2 className="w-4 h-4 text-warning" />
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 py-5 px-6">
                  {/* add invoice */}
                  <div className="flex-1">
                    <Button className="text-xs whitespace-nowrap"> <Plus className="w-5 h-5 ltr:mr-2 rtl:ml-2" /> Add Invoice Item </Button>
                  </div>
                  {/* invoice info */}
                  <div className="flex-none flex flex-col sm:items-end gap-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                      <div className="text-sm font-medium text-default-600">Sub Total:</div>
                      <Input defaultValue="$1663.00" className="text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                      <div className="text-sm font-medium text-default-600">Coupon Discount:</div>
                      <div className="w-full sm:w-[148px] flex">
                        <Input
                          className=" text-xs font-medium  text-default-900 appearance-none accent-transparent rounded ltr:rounded-r-none rtl:rounded-l-none rtl:border-l-0  ltr:border-r-0"
                          type="number"
                          defaultValue="34.36"
                        />
                        <Select>
                          <SelectTrigger className="w-14 rounded ltr:rounded-l-none rtl:rounded-r-none h-9 pr-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:mt-1">
                            <SelectValue placeholder="$" />
                          </SelectTrigger>
                          <SelectContent >
                            <SelectItem value="$">$</SelectItem>
                            <SelectItem value="eur"><Euro className="w-3 h-3" /></SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                      <div className="text-sm font-medium text-default-600">Tax:</div>
                      <div className="w-full sm:w-[148px] flex">
                        <Input
                          className=" text-xs font-medium  text-default-900 appearance-none accent-transparent rounded ltr:rounded-r-none rtl:rounded-l-none rtl:border-l-0  ltr:border-r-0"
                          type="number"
                          defaultValue="0.82"
                        />
                        <Select>
                          <SelectTrigger className="w-14 rounded ltr:rounded-l-none rtl:rounded-r-none h-9 pr-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:mt-1">
                            <SelectValue placeholder="%" />
                          </SelectTrigger>
                          <SelectContent >
                            <SelectItem value="%">%</SelectItem>
                            <SelectItem value="flat">$</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                      <div className="text-sm font-medium text-default-600">Shipping:</div>
                      <Input defaultValue="$14.12" className="text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                      <div className="text-sm font-medium text-default-600">Due Till Date:</div>
                      <Input defaultValue="$0.00" className="text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                      <div className="text-sm font-medium text-default-600">Total:</div>
                      <Input defaultValue="$1243.00" className="text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                      <div className="text-sm font-medium text-default-600">Amount Paid:</div>
                      <Input defaultValue="$1000.00" className="text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                      <div className="text-sm font-medium text-default-600">Balance Due:</div>
                      <Input defaultValue="$243.00" className="text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mt-6">
                <div>
                  <Label htmlFor="note" className="text-sm font-medium text-default-600 mb-1">Note:</Label>
                  <Textarea id="note" className="rounded h-10"
                    placeholder="type note..."
                  />
                </div>
                <div>
                  <Label htmlFor="terms" className="text-sm font-medium text-default-600 mb-1">Terms & Conditions:</Label>
                  <Textarea id="terms" className="rounded h-10" placeholder="type terms..." />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-wrap justify-end gap-4">
              <Button asChild className="bg-default-200 text-xs font-semibold text-default-600 group hover:text-primary-foreground whitespace-nowrap">
                <Link href="/invoice-details"><Icon icon="heroicons:eye" className="w-5 h-5 text-default-500 ltr:mr-2 rtl:ml-2 group-hover:text-primary-foreground" /> Preview</Link>
              </Button>
              <Button asChild className="group hover:bg-default-200 hover:text-default-900 text-xs font-semibold whitespace-nowrap">
                <Link href=""><Icon icon="heroicons:paper-airplane" className="w-5 h-5 ltr:mr-2 rtl:ml-2 group-hover:text-default-900" /> Send Invoice</Link>
              </Button>
            </CardFooter>
          </Card>
          <div className="col-span-12 xl:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Checkbox defaultChecked id="bank" className="border-default-300"> Bank Account</Checkbox>
                  <Checkbox id="paypal" className="border-default-300"> Paypal</Checkbox>
                  <Checkbox id="credit" className="border-default-300"> Credit/Debit Card</Checkbox>
                  <Checkbox id="transfer" className="border-default-300"> UPI Transfer</Checkbox>
                  <Checkbox id="cod" className="border-default-300"> Cash On Delivery (COD)</Checkbox>
                </div>
                <div className="mt-6">
                  <Label htmlFor="name" className="mb-2 text-xs font-medium text-default-600">Card Holder Name:</Label>
                  <Input type="text" id="name" placeholder="Enter name" />
                </div>
                <div className="mt-3">
                  <Label htmlFor="cardNumber" className="mb-2 text-xs font-medium text-default-600">Card Number:</Label>
                  <Input type="number" id="cardNumber" placeholder="Enter Card Number" />
                </div>
                <Alert color="warning" variant="soft" className="mt-6 border border-orange-300">
                  <AlertDescription>Please make sure to pay the invoice bill within 20 to 30 days before it expires.</AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;