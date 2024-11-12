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
              <div 
