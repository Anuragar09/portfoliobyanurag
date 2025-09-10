import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { 
  ArrowLeft, 
  Palette, 
  Layout, 
  Type, 
  Zap, 
  TrendingUp, 
  Users, 
  DollarSign,
  Activity,
  Calendar,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Share,
  Heart,
  Star,
  ShoppingCart,
  Play,
  Pause,
  Volume2,
  SkipForward,
  Repeat
} from 'lucide-react';

const DesignSystemDemo = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [darkMode, setDarkMode] = useState(true);

  // Sample data for charts and components
  const chartData = [
    { name: 'Jan', value: 400, growth: 12 },
    { name: 'Feb', value: 300, growth: -5 },
    { name: 'Mar', value: 600, growth: 18 },
    { name: 'Apr', value: 800, growth: 25 },
    { name: 'May', value: 500, growth: 8 },
    { name: 'Jun', value: 900, growth: 30 }
  ];

  const colors = {
    primary: ['hsl(222, 84%, 5%)', 'hsl(217, 91%, 60%)', 'hsl(221, 83%, 53%)'],
    secondary: ['hsl(210, 40%, 98%)', 'hsl(215, 16%, 47%)', 'hsl(215, 19%, 35%)'],
    accent: ['hsl(210, 40%, 98%)', 'hsl(215, 16%, 65%)', 'hsl(215, 20%, 65%)'],
    success: ['hsl(143, 85%, 96%)', 'hsl(140, 100%, 27%)', 'hsl(140, 83%, 38%)'],
    warning: ['hsl(48, 96%, 89%)', 'hsl(48, 96%, 53%)', 'hsl(45, 93%, 47%)'],
    destructive: ['hsl(0, 86%, 97%)', 'hsl(0, 84%, 60%)', 'hsl(0, 72%, 51%)']
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => window.history.back()}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
          <div className="flex items-center gap-2">
            <Layout className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-semibold">Design System</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Badge variant="secondary">v2.0.0</Badge>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="screens">Screens</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Next-Gen Design System
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive design system built for modern web applications with beautiful components, 
                consistent styling, and powerful customization options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 glass-card">
                <Palette className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Color System</h3>
                <p className="text-muted-foreground text-sm">
                  Carefully crafted color palette with semantic tokens and accessibility in mind.
                </p>
              </Card>
              
              <Card className="p-6 glass-card">
                <Type className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Typography</h3>
                <p className="text-muted-foreground text-sm">
                  Consistent typography scale with perfect readability across all devices.
                </p>
              </Card>
              
              <Card className="p-6 glass-card">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Components</h3>
                <p className="text-muted-foreground text-sm">
                  50+ reusable components with variants, states, and animations.
                </p>
              </Card>
            </div>

            {/* Sample Dashboard Preview */}
            <Card className="p-6 glass-card">
              <h3 className="text-xl font-semibold mb-4">Component Showcase</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="default">Primary Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="mt-4 space-y-2">
                <Progress value={75} className="h-2" />
                <Progress value={50} className="h-2" />
                <Progress value={25} className="h-2" />
              </div>
            </Card>
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Color Palette</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(colors).map(([name, shades]) => (
                  <Card key={name} className="p-6 glass-card">
                    <h3 className="text-lg font-semibold mb-4 capitalize">{name}</h3>
                    <div className="space-y-2">
                      {shades.map((color, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div 
                            className="w-12 h-12 rounded border"
                            style={{ backgroundColor: color }}
                          ></div>
                          <div>
                            <div className="font-mono text-sm">{color}</div>
                            <div className="text-xs text-muted-foreground">
                              {index === 0 ? 'Light' : index === 1 ? 'Base' : 'Dark'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Component Library</h2>
            
            <Card className="p-6 glass-card">
              <h3 className="text-xl font-semibold mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </Card>

            <Card className="p-6 glass-card">
              <h3 className="text-xl font-semibold mb-4">Form Elements</h3>
              <div className="space-y-4 max-w-md">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
                <div>
                  <Label>Volume</Label>
                  <Slider defaultValue={[50]} max={100} step={1} className="mt-2" />
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-card">
              <h3 className="text-xl font-semibold mb-4">Badges & Progress</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
                <div className="space-y-2">
                  <Progress value={33} />
                  <Progress value={66} />
                  <Progress value={100} />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Dashboard Components</h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6 glass-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold text-primary">$45,231</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">+20.1%</span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </Card>

              <Card className="p-6 glass-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                    <p className="text-2xl font-bold text-primary">2,350</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">+180.1%</span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </Card>

              <Card className="p-6 glass-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Sales</p>
                    <p className="text-2xl font-bold text-primary">12,234</p>
                  </div>
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">+19%</span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </Card>

              <Card className="p-6 glass-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Now</p>
                    <p className="text-2xl font-bold text-primary">573</p>
                  </div>
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">+201</span>
                  <span className="text-muted-foreground ml-1">since last hour</span>
                </div>
              </Card>
            </div>

            {/* Chart Component */}
            <Card className="p-6 glass-card">
              <h3 className="text-xl font-semibold mb-4">Revenue Overview</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {chartData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-primary/20 rounded-t"
                      style={{ height: `${(item.value / 1000) * 100}%` }}
                    >
                      <div 
                        className="w-full bg-primary rounded-t transition-all duration-500"
                        style={{ height: '100%' }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{item.name}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Portfolio Layouts</h2>
            
            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="glass-card overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Layout className="h-12 w-12 text-primary/50" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Project {item}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Description of this amazing project with modern technologies.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <Button size="sm" variant="ghost">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Screens Tab */}
          <TabsContent value="screens" className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Screen Templates</h2>
            
            {/* E-commerce Screen */}
            <Card className="p-6 glass-card">
              <h3 className="text-xl font-semibold mb-4">E-commerce Product Page</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingCart className="h-16 w-16 text-primary/50 mx-auto mb-2" />
                    <p className="text-muted-foreground">Product Image</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold">Premium Headphones</h4>
                    <p className="text-3xl font-bold text-primary">$299.99</p>
                  </div>
                  <p className="text-muted-foreground">
                    Experience crystal clear audio with these premium wireless headphones 
                    featuring noise cancellation and 30-hour battery life.
                  </p>
                  <div className="flex gap-2">
                    <Button className="flex-1">Add to Cart</Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Music Player Screen */}
            <Card className="p-6 glass-card">
              <h3 className="text-xl font-semibold mb-4">Music Player Interface</h3>
              <div className="max-w-md mx-auto space-y-6">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Volume2 className="h-16 w-16 text-primary/50 mx-auto mb-2" />
                    <p className="text-muted-foreground">Album Cover</p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold">Song Title</h4>
                  <p className="text-muted-foreground">Artist Name</p>
                </div>
                <Progress value={30} className="h-1" />
                <div className="flex items-center justify-center gap-4">
                  <Button variant="ghost" size="icon">
                    <Repeat className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <SkipForward className="h-5 w-5 rotate-180" />
                  </Button>
                  <Button size="icon" className="h-12 w-12">
                    <Play className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <SkipForward className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Volume2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DesignSystemDemo;