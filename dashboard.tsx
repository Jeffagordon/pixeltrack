import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs"
import { BarChart, LineChart } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <header className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <div className="flex items-center gap-2">
            <BarChart className="h-6 w-6" />
            <span className="text-xl font-bold">Pixeltrack</span>
          </div>
          <nav className="flex-1">
            <ul className="flex gap-4">
              <li>
                <a className="text-sm font-medium hover:underline" href="#">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="text-sm font-medium hover:underline" href="#">
                  Pixels
                </a>
              </li>
              <li>
                <a className="text-sm font-medium hover:underline" href="#">
                  Analytics
                </a>
              </li>
              <li>
                <a className="text-sm font-medium hover:underline" href="#">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
          <Button variant="outline">Sign Out</Button>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <Button>Create New Pixel</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Opens</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Pixels</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 new this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">892</div>
              <p className="text-xs text-muted-foreground">+10.5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4%</div>
              <p className="text-xs text-muted-foreground">+0.3% from last month</p>
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recent">Recent Pixels</TabsTrigger>
            <TabsTrigger value="active">Most Active</TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recently Created Pixels</CardTitle>
                <CardDescription>Your latest tracking pixels and their performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Newsletter Campaign", opens: 450, created: "2 days ago" },
                    { name: "Product Launch", opens: 290, created: "5 days ago" },
                    { name: "Welcome Email", opens: 180, created: "1 week ago" },
                  ].map((pixel) => (
                    <div key={pixel.name} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{pixel.name}</div>
                        <div className="text-sm text-muted-foreground">Created {pixel.created}</div>
                      </div>
                      <div className="font-medium">{pixel.opens} opens</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="active" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Most Active Pixels</CardTitle>
                <CardDescription>Your best performing tracking pixels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Black Friday Campaign", opens: 2450, conversion: "4.5%" },
                    { name: "Summer Sale", opens: 1890, conversion: "3.2%" },
                    { name: "Customer Survey", opens: 1180, conversion: "2.8%" },
                  ].map((pixel) => (
                    <div key={pixel.name} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{pixel.name}</div>
                        <div className="text-sm text-muted-foreground">{pixel.opens} total opens</div>
                      </div>
                      <div className="font-medium">{pixel.conversion} conversion</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
