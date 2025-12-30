import useQuerryParams from "@/hooks/use-querry-params";

const SHRAM_TO_TICKET_PARAMS = "shram-to-ticket";

const useShramToTicketModal = () => {
  const { updateQuerryParams, deleteQuerryParams, getQuerryParams } =
    useQuerryParams();

  const isShramToTicket = !!getQuerryParams(SHRAM_TO_TICKET_PARAMS);

  const handleOpenShramToTicket = () => {
    updateQuerryParams({ [SHRAM_TO_TICKET_PARAMS]: "active" });
  };

  const handleCloseShramToTicket = () => {
    deleteQuerryParams([SHRAM_TO_TICKET_PARAMS]);
  };

  return {
    isShramToTicket,
    handleOpenShramToTicket,
    handleCloseShramToTicket,
  };
};

export default useShramToTicketModal;
