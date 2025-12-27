
import React, { useState } from 'react';
import { CreditCard, Smartphone, CheckCircle, X, ShieldCheck } from 'lucide-react';
import { PaymentMethod } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  price: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, serviceTitle, price }) => {
  const [method, setMethod] = useState<PaymentMethod | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 backdrop-blur-md bg-black/60">
      <div className="bg-zinc-900 border border-white/10 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        
        {!isSuccess ? (
          <>
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-syncopate font-bold uppercase">Checkout</h3>
                <p className="text-zinc-500 text-sm">{serviceTitle}</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 space-y-8">
              <div className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5">
                <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Total to pay</span>
                <span className="text-3xl font-syncopate font-black text-red-500">${price}</span>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest block">Select Payment Method</label>
                <div className="grid grid-cols-1 gap-3">
                  <button 
                    onClick={() => setMethod(PaymentMethod.VISA)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${method === PaymentMethod.VISA ? 'border-red-500 bg-red-500/10' : 'border-white/5 bg-black/20 hover:border-white/20'}`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className={method === PaymentMethod.VISA ? 'text-red-500' : 'text-zinc-500'} />
                      <span className="font-bold">Visa / Mastercard</span>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                      {method === PaymentMethod.VISA && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
                    </div>
                  </button>

                  <button 
                    onClick={() => setMethod(PaymentMethod.MOBILE_MONEY)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${method === PaymentMethod.MOBILE_MONEY ? 'border-yellow-500 bg-yellow-500/10' : 'border-white/5 bg-black/20 hover:border-white/20'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className={method === PaymentMethod.MOBILE_MONEY ? 'text-yellow-500' : 'text-zinc-500'} />
                      <span className="font-bold">MTN Mobile Money</span>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                      {method === PaymentMethod.MOBILE_MONEY && <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>}
                    </div>
                  </button>

                  <button 
                    onClick={() => setMethod(PaymentMethod.ORANGE_MONEY)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${method === PaymentMethod.ORANGE_MONEY ? 'border-orange-500 bg-orange-500/10' : 'border-white/5 bg-black/20 hover:border-white/20'}`}
                  >
                    <div className="flex items-center gap-3">
                      <Smartphone className={method === PaymentMethod.ORANGE_MONEY ? 'text-orange-500' : 'text-zinc-500'} />
                      <span className="font-bold">Orange Money</span>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                      {method === PaymentMethod.ORANGE_MONEY && <div className="w-2 h-2 bg-orange-500 rounded-full"></div>}
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-zinc-500 text-xs">
                <ShieldCheck size={14} className="text-green-500" />
                <span>Secure payment encrypted with 256-bit SSL</span>
              </div>

              <button 
                disabled={!method || isProcessing}
                onClick={handlePayment}
                className={`w-full py-5 rounded-2xl font-bold text-lg uppercase tracking-widest transition-all ${method && !isProcessing ? 'udc-gradient hover:scale-105 active:scale-95 shadow-xl' : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'}`}
              >
                {isProcessing ? 'Processing Transaction...' : 'Confirm & Pay'}
              </button>
            </div>
          </>
        ) : (
          <div className="p-16 text-center space-y-6">
            <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto animate-bounce-slow">
              <CheckCircle size={48} />
            </div>
            <h3 className="text-3xl font-syncopate font-black uppercase">Payment Successful!</h3>
            <p className="text-zinc-400">
              Transaction complete. You will receive an automated confirmation email and WhatsApp notification shortly.
            </p>
            <button 
              onClick={onClose}
              className="udc-gradient w-full py-4 rounded-xl font-bold uppercase tracking-widest"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
