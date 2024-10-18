
const PromotionalCard = () => {
  return (
    <div className="bg-primary rounded-sm p-4 relative overflow-hidden w-full md:hidden 2xl:block">
      <div className="max-w-[160px]">
        <div className="text-xl font-semibold text-primary-foreground">Upgrade Your Plan - Pro</div>
        <div className="mt-2 text-xs text-primary-foreground">20% off now. Upgrade your Plan & get more space </div>
      </div>
      <div className="h-12 w-12 rounded-full bg-primary-100 text-xs font-medium text-primary-600 leading-[48px] text-center absolute bottom-5 ltr:right-1.5 rtl:left-1.5 ">Now</div>
    </div>
  );
};

export default PromotionalCard;