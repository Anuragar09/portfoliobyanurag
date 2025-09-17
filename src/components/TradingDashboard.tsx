import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  Activity,
  ArrowLeft,
  RefreshCw
} from 'lucide-react';

const TradingDashboard = () => {
  const [portfolioValue, setPortfolioValue] = useState(125420);
  const [stocks] = useState([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 175.32, change: 2.45, changePercent: 1.42 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2847.63, change: -15.32, changePercent: -0.53 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 329.87, change: 4.21, changePercent: 1.29 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 242.15, change: -8.76, changePercent: -3.49 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 142.31, change: 1.87, changePercent: 1.33 }
  ]);

  const [cryptos] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: 43250.67, change: 1250.45, changePercent: 2.98 },
    { symbol: 'ETH', name: 'Ethereum', price: 2687.34, change: -45.23, changePercent: -1.66 },
    { symbol: 'ADA', name: 'Cardano', price: 0.4523, change: 0.0234, changePercent: 5.45 },
    { symbol: 'SOL', name: 'Solana', price: 67.89, change: 3.21, changePercent: 4.96 }
  ]);

  const [forex] = useState([
    { pair: 'EUR/USD', rate: 1.0876, change: 0.0023, changePercent: 0.21 },
    { pair: 'GBP/USD', rate: 1.2654, change: -0.0045, changePercent: -0.35 },
    { pair: 'USD/JPY', rate: 148.67, change: 0.34, changePercent: 0.23 },
    { pair: 'USD/CAD', rate: 1.3542, change: 0.0012, changePercent: 0.09 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time price updates
      setPortfolioValue(prev => prev + (Math.random() - 0.5) * 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number, decimals = 2) => {
    return price.toLocaleString('en-US', { 
      minimumFractionDigits: decimals, 
      maximumFractionDigits: decimals 
    });
  };

  const formatChange = (change: number, isPercent = false) => {
    const prefix = change >= 0 ? '+' : '';
    const suffix = isPercent ? '%' : '';
    return `${prefix}${change.toFixed(2)}${suffix}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="glass" 
            size="sm"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold gradient-text">Trading Dashboard</h1>
            <p className="text-muted-foreground">Real-time market overview</p>
          </div>
        </div>
        <Button variant="glass" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Portfolio Overview */}
      <div className="glass-card mb-8">
        <h2 className="text-xl font-semibold mb-6">Portfolio Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-2xl font-bold">${formatPrice(portfolioValue)}</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Badge variant="secondary" className="glass">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2.4%
                </Badge>
                <span className="text-xs text-muted-foreground">Today</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Day P&L</p>
                  <p className="text-2xl font-bold text-green-500">+$2,847</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total P&L</p>
                  <p className="text-2xl font-bold text-green-500">+$15,420</p>
                </div>
                <BarChart3 className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Trades</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Activity className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Markets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stocks */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Stocks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {stocks.map((stock) => (
              <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                <div>
                  <div className="font-semibold">{stock.symbol}</div>
                  <div className="text-xs text-muted-foreground">{stock.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${formatPrice(stock.price)}</div>
                  <div className={`text-xs flex items-center gap-1 ${
                    stock.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stock.change >= 0 ? 
                      <TrendingUp className="h-3 w-3" /> : 
                      <TrendingDown className="h-3 w-3" />
                    }
                    {formatChange(stock.changePercent, true)}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Crypto */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Cryptocurrency
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cryptos.map((crypto) => (
              <div key={crypto.symbol} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                <div>
                  <div className="font-semibold">{crypto.symbol}</div>
                  <div className="text-xs text-muted-foreground">{crypto.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${formatPrice(crypto.price)}</div>
                  <div className={`text-xs flex items-center gap-1 ${
                    crypto.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {crypto.change >= 0 ? 
                      <TrendingUp className="h-3 w-3" /> : 
                      <TrendingDown className="h-3 w-3" />
                    }
                    {formatChange(crypto.changePercent, true)}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Forex */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Forex
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {forex.map((pair) => (
              <div key={pair.pair} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                <div>
                  <div className="font-semibold">{pair.pair}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{formatPrice(pair.rate, 4)}</div>
                  <div className={`text-xs flex items-center gap-1 ${
                    pair.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {pair.change >= 0 ? 
                      <TrendingUp className="h-3 w-3" /> : 
                      <TrendingDown className="h-3 w-3" />
                    }
                    {formatChange(pair.changePercent, true)}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Chart Placeholder */}
      <Card className="glass mt-6">
        <CardHeader>
          <CardTitle>Portfolio Performance Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Interactive chart would be displayed here</p>
              <p className="text-sm text-muted-foreground mt-2">Integration with charting library like Chart.js or D3.js</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingDashboard;