import { Loader2Icon, MoreVertical } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import GlobalApi from '../../../service/GlobalApi';
import { toast } from 'sonner';

function PortfolioCardItem({ portfolio, refreshData }) {
  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeletePortfolioById(portfolio.id).then(
      (resp) => {
        toast('Portfolio Deleted!');
        refreshData();
        setLoading(false);
        setOpenAlert(false);
      },
      (error) => {
        toast.error('Failed to delete portfolio.');
        setLoading(false);
      }
    );
  };

  const handleViewPortfolio = async (portfolioId) => {
    try {
      const res = await GlobalApi.GetPortfolioById(portfolioId);
      const templateId = res.data.data?.attributes?.templateId;
  
      if (!templateId) {
        toast.error("Template ID not found for this portfolio.");
        return;
      }
  
      navigate(`/dashboard/template-portfolio${templateId}/${portfolioId}`);
    } catch (error) {
      console.error("Failed to fetch portfolio", error);
    }
  };
  
  return (
    <div className="">
      {/* View triggers immediately on top section click */}
      <div
         onClick={() => handleViewPortfolio(portfolio.id)}
        className="p-14 bg-gradient-to-b from-green-100 via-green-400 to-green-800 h-[280px] rounded-t-lg border-t-4 cursor-pointer"
        style={{
          borderColor: portfolio?.attributes?.themeColor || '#10b981',
        }}
      >
        <div className="flex items-center justify-center h-[180px]">
          <img src="/portfolio.png" width={80} height={80} alt="portfolio icon" />
        </div>
      </div>

      {/* Bottom - only keyline and menu */}
      <div
        className="border p-3 flex justify-between text-white rounded-b-lg shadow-lg"
        style={{
          background: portfolio?.attributes?.themeColor || '#10b981',
        }}
      >
        <h2 className="text-sm font-bold text-green-900 truncate">
          {portfolio?.attributes?.keyline || 'No tagline'}
        </h2>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="h-4 w-4 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem  onClick={() => handleViewPortfolio(portfolio.id)}>View</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenAlert(true)}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Alert dialog for delete confirmation */}
        <AlertDialog open={openAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete your portfolio and cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenAlert(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete} disabled={loading}>
                {loading ? <Loader2Icon className="animate-spin" /> : 'Delete'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default PortfolioCardItem;
