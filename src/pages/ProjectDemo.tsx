import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';
import NetflixClone from '@/components/NetflixClone';
import DesignSystemDemo from '@/components/DesignSystemDemo';

const ProjectDemo = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  if (type === 'netflix-clone') {
    return <NetflixClone />;
  }

  if (type === 'design-system') {
    return <DesignSystemDemo />;
  }

  // Default fallback - shows portfolio dashboard
  return <PortfolioDashboard />;
};

const PortfolioDashboard = () => {
  const [searchParams] = useSearchParams();

  const trades = [
    { pair: 'EUR/USD', type: 'BUY', entry: 1.0850, current: 1.0920, pnl: +245.50, status: 'profit' },
    { pair: 'GBP/JPY', type: 'SELL', entry: 187.25, current: 186.10, pnl: +180.25, status: 'profit' },
    { pair: 'USD/CAD', type: 'BUY', entry: 1.3520, current: 1.3485, pnl: -125.75, status: 'loss' },
    { pair: 'AUD/USD', type: 'SELL', entry: 0.6750, current: 0.6795, pnl: -89.50, status: 'loss' },
    { pair: 'USD/JPY', type: 'BUY', entry: 149.80, current: 150.45, pnl: +320.15, status: 'profit' },
  ];

  const totalPnL = trades.reduce((sum, trade) => sum + trade.pnl, 0);
  const profitTrades = trades.filter(t => t.status === 'profit').length;
  const lossTrades = trades.filter(t => t.status === 'loss').length;

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
          <h1 className="text-4xl font-bold gradient-text mb-2">Trading Portfolio Dashboard</h1>
          <p className="text-muted-foreground">Real-time forex trading overview and P&L tracking</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Account Balance</p>
                <p className="text-2xl font-bold text-primary">$1,000.00</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total P&L</p>
                <p className={`text-2xl font-bold ${totalPnL >= 0 ? 'text-accent' : 'text-destructive'}`}>
                  ${totalPnL >= 0 ? '+' : ''}${totalPnL.toFixed(2)}
                </p>
              </div>
              {totalPnL >= 0 ? 
                <TrendingUp className="h-8 w-8 text-accent" /> : 
                <TrendingDown className="h-8 w-8 text-destructive" />
              }
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Winning Trades</p>
                <p className="text-2xl font-bold text-accent">{profitTrades}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Losing Trades</p>
                <p className="text-2xl font-bold text-destructive">{lossTrades}</p>
              </div>
              <TrendingDown className="h-8 w-8 text-destructive" />
            </div>
          </Card>
        </div>

        {/* Active Trades */}
        <Card className="glass-card mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <BarChart3 className="h-6 w-6 mr-2 text-primary" />
              Active Trades
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Currency Pair</th>
                    <th className="text-left py-3 px-4">Type</th>
                    <th className="text-left py-3 px-4">Entry Price</th>
                    <th className="text-left py-3 px-4">Current Price</th>
                    <th className="text-left py-3 px-4">P&L</th>
                    <th className="text-left py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {trades.map((trade, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{trade.pair}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          trade.type === 'BUY' ? 'bg-accent/20 text-accent' : 'bg-secondary/20 text-secondary'
                        }`}>
                          {trade.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{trade.entry}</td>
                      <td className="py-3 px-4">{trade.current}</td>
                      <td className={`py-3 px-4 font-semibold ${
                        trade.pnl >= 0 ? 'text-accent' : 'text-destructive'
                      }`}>
                        ${trade.pnl >= 0 ? '+' : ''}{trade.pnl}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          trade.status === 'profit' 
                            ? 'bg-accent/20 text-accent' 
                            : 'bg-destructive/20 text-destructive'
                        }`}>
                          {trade.status === 'profit' ? 'Profit' : 'Loss'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        {/* Chart Placeholder */}
        <Card className="glass-card">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Portfolio Performance</h2>
            <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive chart would be displayed here</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDemo;