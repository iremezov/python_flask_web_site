var app = angular.module("4App", ['ngGrid']);

var clientId = null;
var accountNo = null;
var search_type = null;
var subscrNo = null;
var isPostPaid = null;



app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);


app.service('RequestService', function ($http) {


    this.getSmState = function (Input, Type) {
        return $http.post("/SubscribersManagment/SubscribersManagment/getSmState", { "Input": Input, "Type": Type }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetPassportDataByMSISDN = function (msisdn) {
        //$(".loading").show();
        //return $http.post("http://localhost/webapi_deb/SubscribersManagment/SubscribersManagment/SubscriberGetPassportDataByMSISDN", { "Msisdn": msisdn }, { headers: { 'Content-Type': 'application/json' } });
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetPassportDataByMSISDN", { "Msisdn": msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetByPassportSN = function (PassportSN) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetByPassportSN", { "PassportSN": PassportSN }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetPassportDataBySubscriberId = function (SubscriberId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetPassportDataBySubscriberId", { "SubscriberId": SubscriberId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetOrganizationInfo = function (accountNo) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetOrganizationInfo", { "AccountNo": accountNo }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetC1Info = function (msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetC1Info", { "Msisdn": msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetSimInfo = function (msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetSimInfo", { "Msisdn": msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetBillingInfo = function (accountNo) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetBillingInfo", { "AccountNo": accountNo }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetOwnerMsisdn = function (msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetOwnerMsisdn", { "Msisdn": msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetSubscribersByClientId = function (clientid) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetSubscribersByClientId", { "ClientId": clientid }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetAssignedOfferList = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetAssignedOfferList", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberCampaignList = function (msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberCampaignList", { "Msisdn": msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetPOList = function (msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetPOList", { "Msisdn": msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSwapPo = function (msisdn, po_id, old_po_id, charge_state) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSwapPo", { "Msisdn": msisdn, "PoId": po_id, "OldPoId": old_po_id, "ChargeState": charge_state }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetStateList = function (source_state) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetStateList", { "SourceState": source_state }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberUpdateState = function (msisdn, new_rating_state) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberUpdateState", { "Msisdn": msisdn, "RatingState": new_rating_state }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberUpdateLanguage = function (Msisdn, new_language_id) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberUpdateLanguage", { "Msisdn": Msisdn, "NewLanguageId": new_language_id }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberUpdateFraudState = function (Msisdn, new_fraud_state, comment, prev_fraud_state) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberUpdateFraudState", { "Msisdn": Msisdn, "NewStateId": new_fraud_state, "Comment": comment, "PrevStateId": prev_fraud_state }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetSubscribersBySsn = function (ssn) {
        $(".loading").show();
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetSubscribersBySsn", { "Ssn": ssn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetRatingStateList = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetRatingStateList", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountChangeRatingState = function (account_no, new_account_state, old_account_state) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountChangeRatingState", { "account_no": account_no, "new_account_state": new_account_state, "old_account_state": old_account_state }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSetAccessCode = function (client_id, new_access_code, old_access_code, account_no) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSetAccessCode", { "client_id": client_id, "new_access_code": new_access_code, "old_access_code": old_access_code, "account_no": account_no }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetCategoryList = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetCategoryList", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountUpdateCategory = function (accountNo, newAccountCategory, oldAccountCategor) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountUpdateCategory", { "accountNo": accountNo, "newAccountCategory": newAccountCategory, "oldAccountCategor": oldAccountCategor }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetSegmentGroupList = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetSegmentGroupList", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSetSegmentGroup = function (account_no, new_segment_group, old_segment_group) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSetSegmentGroup", { "account_no": account_no, "new_segment_group": new_segment_group, "old_segment_group": old_segment_group }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountUpdateData = function (Data) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountUpdateData", { "Data": Data }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetPropertyTypeList = function (current_property_type) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetPropertyTypeList", { "current_property_type": current_property_type }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSetNotificationTemplate = function (account_no, template_id) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSetNotificationTemplate", { "account_no": account_no, "template_id": template_id }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSetNotificationLang = function (account_no, msisdn, suppress_account_notofication, is_notification_recipient, language) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSetNotification", { "account_no": account_no, "msisdn": msisdn, "suppress_account_notofication": suppress_account_notofication, "is_notification_recipient": is_notification_recipient, "lang": language }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetBalances = function (msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetBalances", { "Msisdn": msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetBalanceValue = function (msisdn, balance_id) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetBalanceValue", { "Msisdn": msisdn, "BalanceId": balance_id }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberUpdateBalance = function (msisdn, update_type, balance_id, total_balance, old_total_balance, mtr_comment, expiration_date) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberUpdateBalance", { "Msisdn": msisdn, "UpdateType": update_type, "BalanceId": balance_id, "TotalBalance": total_balance, "OldTotalBalance": old_total_balance, "MtrComment": mtr_comment, "ExpirationDate": expiration_date }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberDisconnect = function (Msisdn, Comment) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberDisconnectSubscriber", { "Msisdn": Msisdn, "Comment": Comment }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberDisconnectOffer = function (Msisdn, OfferId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberDisconnectOffer", { "Msisdn": Msisdn, "OfferId": OfferId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberDisconnectCampaign = function (Msisdn, CampaignId, BundleId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberDisconnectCampaign", { "Msisdn": Msisdn, "CampaignId": CampaignId, "BundleId": BundleId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberTransfer = function (Msisdn, OldAccountId, NewAccountId, Comment) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberTransfer", { "Msisdn": Msisdn, "OldAccountId": OldAccountId, "NewAccountId": NewAccountId, "Comment": Comment }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetCugList = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetCugList", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberActivateCampaign = function (Msisdn, CampaignId, BundleId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberActivateCampaign", { "Msisdn": Msisdn, "CampaignId": CampaignId, "BundleId": BundleId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberAddCUG = function (Msisdn, CugId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberAddCUG", { "Msisdn": Msisdn, "CugId": CugId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberRemoveCug = function (Msisdn, CugId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberRemoveCug", { "Msisdn": Msisdn, "CugId": CugId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetCMLNRCList = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetCMLNRCList", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetAssignedOffers = function (AccountNo) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetAssignedOffers", { "AccountNo": AccountNo }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountDisconnectOffer = function (AccountNo, OfferId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountDisconnectOffer", { "AccountNo": AccountNo, "OfferId": OfferId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountCampaignList = function (SegmentGroupId, AccountNo) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountCampaignList", { "SegmentGroupId": SegmentGroupId, "AccountNo": AccountNo }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountActivateCampaign = function (AccountNo, OfferId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountActivateCampaign", { "AccountNo": AccountNo, "OfferId": OfferId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSetSmsContentOff = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetSmsContentOff", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSwapBulkSmsState = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSwapBulkSmsState", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSetSmsSurvey = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetSmsSurvey", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetFLNByPassport = function (SearchType, PassportSerial, PassportNumber, DocumentNumber) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetFLNByPassport", { "SearchType": SearchType, "PassportSerial": PassportSerial, "PassportNumber": PassportNumber, "DocumentNumber": DocumentNumber }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSetOwnerMsisdn = function (Msisdn, PersonalId, IsSplitBalance) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSetOwnerMsisdn", { "Msisdn": Msisdn, "PersonalId": PersonalId, "IsSplitBalance": IsSplitBalance }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSetOffOwnerMsisdn = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSetOffOwnerMsisdn", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountUpdateOwnerPassportData = function (Data) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountUpdateOwnerPassportData", { "Data": Data }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberUpdateStateMO = function (Msisdn, RatingState) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberUpdateStateMO", { "Msisdn": Msisdn, "RatingState": RatingState }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberTransferMO = function (MsisdnList, OldAccountId, NewAccountId, Comment) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberTransferMO", { "MsisdnList": MsisdnList, "OldAccountId": OldAccountId, "NewAccountId": NewAccountId, "Comment": Comment, "UserId": 34 }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.CampaignsGetListMO = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/CampaignsGetListMO", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.ExtendedDataGetListMo = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/ExtendedDataGetListMo", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.ExtendedDataGetFieldMo = function (EdName) {
        return $http.post("/SubscribersManagment/SubscribersManagment/ExtendedDataGetFieldMo", { "EdName": EdName }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberUpdateExtendedDataMo = function (MsisdnList, EdName, EdType, EdValue, UserId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberUpdateExtendedDataMo", { "MsisdnList": MsisdnList, "EdName": EdName, "EdType": EdType, "EdValue": EdValue, "UserId": UserId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberCampaignControlMo = function (MsisdnList, CampaignIdBundle, Action) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberCampaignControlMo", { "MsisdnList": MsisdnList, "CampaignIdBundle": CampaignIdBundle, "Action": Action }, { headers: { 'Content-Type': 'application/json' } });
    };

    //this.SubscriberGetBalancesMo = function (DealId, ActionId, ActionType) {
    //    return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetBalancesMo", { "DealId": DealId, "ActionId": ActionId, "ActionType": ActionType }, { headers: { 'Content-Type': 'application/json' } });
    //};
    this.SubscriberGetBalancesMo = function (DealId, ActionId, ActionType) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetBalancesMo", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberUpdateBalanceMo = function (MsisdnList, BalanceId, NewValue, Comment, ExpDate, UpdateType) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberUpdateBalanceMo", { "MsisdnList": MsisdnList, "BalanceId": BalanceId, "NewValue": NewValue, "Comment": Comment, "ExpDate": ExpDate, "UpdateType": UpdateType }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSplitBalanceMo = function (MsisdnList, PoId, ShadowBalance, UserId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSplitBalanceMo", { "MsisdnList": MsisdnList, "PoId": PoId, "ShadowBalance": ShadowBalance, "UserId": UserId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberAssignCugMo = function (MsisdnList, CugId, UserId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberAssignCugMo", { "MsisdnList": MsisdnList, "CugId": CugId, "UserId": UserId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetMsisdnPriceBN = function (Msisdn, IsDiscount, CampaignType) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetMsisdnPriceBN", { "Msisdn": Msisdn, "IsDiscount": IsDiscount, "CampaignType": CampaignType }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSetBNPayment = function (Msisdn, ChargeAmount) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetBNPayment", { "Msisdn": Msisdn, "ChargeAmount": ChargeAmount }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetLastBNCharge = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetLastBNCharge", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetLastMSCharge = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetLastMSCharge", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSetMSPayment = function (Msisdn, ChargeAmount, Iccid) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetMSPayment", { "Msisdn": Msisdn, "ChargeAmount": ChargeAmount, "Iccid": Iccid }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetLastDeviceCharge = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetLastDeviceCharge", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetImsiByIccid = function (Msisdn, Iccid) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetImsiByIccid", { "Msisdn": Msisdn, "Iccid": Iccid }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberChangeImsi = function (Msisdn, Imsi, Iccid, Isfree, DualSimType, Reason, ReasonTxt) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberChangeImsi", { "Msisdn": Msisdn, "Imsi": Imsi, "Iccid": Iccid, "Isfree": Isfree, "DualSimType": DualSimType, "Reason": Reason, "ReasonTxt": ReasonTxt }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetED = function (Msisdn, Imsi, Iccid, Isfree) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetED", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberUpdateED = function (Msisdn, EdName, EdType, EdValue) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberUpdateED", { "Msisdn": Msisdn, "EdName": EdName, "EdType": EdType, "EdValue": EdValue }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetOTI = function (AccountNo, ApplyDate) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetOTI", { "AccountNo": AccountNo, "ApplyDate": ApplyDate }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSetOTI = function (AccountNo, ApplyDate, RcList) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSetOTI", { "AccountNo": AccountNo, "ApplyDate": ApplyDate, "RcList": RcList }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSetTMP = function (AccountNo, OldTmlValue, NewTmlValue, Comment) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSetTMP", { "AccountNo": AccountNo, "OldTmlValue": OldTmlValue, "NewTmlValue": NewTmlValue, "Comment": Comment }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetReregistrationState = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetReregistrationState", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSetReregistrationState = function (MsisdnId, ReregistrationState) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetReregistrationState", { "MsisdnId": MsisdnId, "ReregistrationState": ReregistrationState }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetSNRCList = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetSNRCList", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSNRCLoadAnnotation = function (AccountNo, AnotationStartDate, AnotationEndDate) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSNRCLoadAnnotation", { "AccountNo": AccountNo, "AnotationStartDate": AnotationStartDate, "AnotationEndDate": AnotationEndDate }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSetSNRC = function (AccountNo, NrcTermId, OverrideRate, Annotation, Comment) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSetSNRC", { "AccountNo": AccountNo, "NrcTermId": NrcTermId, "OverrideRate": OverrideRate, "Annotation": Annotation, "Comment": Comment }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.PoGetParameter = function (PoId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/PoGetParameter", { "PoId": PoId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SohoFindOrganizationBySsn = function (Ssn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SohoFindOrganizationBySsn", { "Ssn": Ssn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SohoAddSSNtoMsisdn = function (Msisdn, Ssn, CompanyName, SohoId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SohoAddSSNtoMsisdn", { "Msisdn": Msisdn, "Ssn": Ssn, "CompanyName": CompanyName, "SohoId": SohoId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.isActionAllowJS = function (GroupId, DealId, ActionId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/isActionAllowJS", { "GroupId": GroupId, "DealId": DealId, "ActionId": ActionId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetAccumList = function (SubscrNo) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetAccumList", { "SubscrNo": SubscrNo }, { headers: { 'Content-Type': 'application/json' } });

    };

    this.AccountGetSnrcOrder = function (StartDate, EndDate, State) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetSnrcOrder", { "StartDate": StartDate, "EndDate": EndDate, "State": State }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountUpdateSnrcOrder = function (OrderList, ActionId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountUpdateSnrcOrder", { "OrderList": OrderList, "ActionId": ActionId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetShortC1Info = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetShortC1Info", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberDocSimChange = function (Msisdn, AgreementNum, OldIccid, NewIccid, SaleDate, ClientFio) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberDocSimChange", { "Msisdn": Msisdn, "AgreementNum": AgreementNum, "OldIccid": OldIccid, "NewIccid": NewIccid, "SaleDate": SaleDate, "ClientFio": ClientFio }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberDocSimDual = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberDocSimDual", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };


    this.SubscriberGetSpareSim = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetSpareSim", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberDocSpareSim = function (SpareSimCode) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberDocSpareSim", { "SpareSimCode": SpareSimCode }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberDocSpareSimOrder = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberDocSpareSimOrder", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.AccountGetSubscribersForRefund = function (AccountNo) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetSubscribersForRefund", { "AccountNo": AccountNo }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberInquiryRefundDoc = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberInquiryRefundDoc", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.AccountGetSupplimentaryAgreement = function (AccountNo) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetSupplimentaryAgreement", { "AccountNo": AccountNo }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.AccountGetManagers = function (AccountNo) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetManagers", { "AccountNo": AccountNo }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberGetDocsState = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetDocsState", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberSetDocsState = function (Msisdn, SubscriberId, PassportPresent, AgreementPresent, AgreementCorrect, PassportCorrect, Msg) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetDocsState", { "SubscriberId": SubscriberId, "Msisdn": Msisdn, "PassportPresent": PassportPresent, "AgreementPresent": AgreementPresent, "PassportCorrect": PassportCorrect, "AgreementCorrect": AgreementCorrect, "Msg": Msg }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberSetDocsState1 = function (SubscriberId, Msisdn, PassportPresent, AgreementPresent, PassportCorrect, AgreementCorrect, Msg) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetDocsState", { "SubscriberId": SubscriberId, "Msisdn": Msisdn, "PassportPresent": PassportPresent, "AgreementPresent": AgreementPresent, "PassportCorrect": PassportCorrect, "AgreementCorrect": AgreementCorrect, "Msg": Msg }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberUnbindPassport = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberUnbindPassport", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.ClientFindByPassport = function (PassportSeries, PassportNumber, Resident) {
        return $http.post("/SubscribersManagment/SubscribersManagment/ClientFindByPassport", { "PassportSeries": PassportSeries, "PassportNumber": PassportNumber, "Resident": Resident }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.ClientFindByDocumentNumber = function (DocumentNumber, Resident) {
        return $http.post("/SubscribersManagment/SubscribersManagment/ClientFindByDocumentNumber", { "DocumentNumber": DocumentNumber, "Resident": Resident }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberBindPassport = function (Msisdn, ClientId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberBindPassport", { "Msisdn": Msisdn, "ClientId": ClientId }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberBindPassport1 = function (SubscriberId, Msisdn, ClientId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberBindPassport1", { "SubscriberId": SubscriberId, "Msisdn": Msisdn, "ClientId": ClientId }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberEditPassport = function (Msisdn,
                                            ClientId,
                                            LastName,
                                            FirstName,
                                            MiddleName,
                                            Gender,
                                            GenderV,
                                            Country,
                                            Province,
                                            City,
                                            Address,
                                            PassportPlace,
                                            Birthdate,
                                            HomePhone,
                                            Email,
                                            DocExpireDate,
                                            LastNameO,
                                            FirstNameO,
                                            MiddleNameO,
                                            GenderO,
                                            CountryO,
                                            ProvinceO,
                                            CityO,
                                            AddressO,
                                            PassportPlaceO,
                                            BirthdateO,
                                            HomePhoneO,
                                            EmailO,
                                            DocExpireDateO,
                                            PassportDate,
                                            PassportDateO,
                                            VisaType,
                                            DateArrive,
                                            DateVisa) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberEditPassport", {
            "Msisdn": Msisdn,
            "ClientId": ClientId,
            "LastName": LastName,
            "FirstName": FirstName,
            "MiddleName": MiddleName,
            "Gender": Gender,
            "GenderV": GenderV,
            "Country": Country,
            "Province": Province,
            "City": City,
            "Address": Address,
            "PassportPlace": PassportPlace,
            "Birthdate": Birthdate,
            "HomePhone": HomePhone,
            "Email": Email,
            "DocExpireDate": DocExpireDate,
            "LastNameO": LastNameO,
            "FirstNameO": FirstNameO,
            "MiddleNameO": MiddleNameO,
            "GenderO": GenderO,
            "CountryO": CountryO,
            "ProvinceO": ProvinceO,
            "CityO": CityO,
            "AddressO": AddressO,
            "PassportPlaceO": PassportPlaceO,
            "BirthdateO": BirthdateO,
            "HomePhoneO": HomePhoneO,
            "EmailO": EmailO,
            "DocExpireDateO": DocExpireDateO,
            "PassportDate": PassportDate,
            "PassportDateO": PassportDateO,
            "VisaType": VisaType,
            "DateArrive": DateArrive,
            "DateVisa": DateVisa
        }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberSaveNumberGetPOList = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSaveNumberGetPOList", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberAddComment = function (Msisdn, Comment) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberAddComment", { "Msisdn": Msisdn, "Comment": Comment }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberLoadComments = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberLoadComments", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberPCPasswordReset = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberPCPasswordReset", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberAvayaSoControl = function (Msisdn, Param) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberAvayaSoControl", { "Msisdn": Msisdn, "Param": Param }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberChangePlatform = function (Msisdn, ChargeFlag, Ticket, IsChargeble, IsCash) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberChangePlatform", { "Msisdn": Msisdn, "ChargeFlag": ChargeFlag, "Ticket": Ticket, "IsChargeble": IsChargeble, "IsCash": IsCash }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.AccountUpdateLanguage = function (AccountNo, NewLangId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountUpdateLanguage", { "AccountNo": AccountNo, "NewLangId": NewLangId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberDeactivateSplitBalance = function (Msisdn, PaymentType) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberDeactivateSplitBalance", { "Msisdn": Msisdn, "PaymentType": PaymentType }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetDeliveryGroupList = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetDeliveryGroupList", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSetDeliveryGroup = function (AccounNo, DeliveryGroup) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSetDeliveryGroup", { "AccounNo": AccounNo, "DeliveryGroup": DeliveryGroup }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberRemoveSpareSim = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberRemoveSpareSim", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSetDevicePayment = function (Msisdn, ChargeAmount) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetDevicePayment", { "Msisdn": Msisdn, "ChargeAmount": ChargeAmount }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetPoRCOverride = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetPoRCOverride", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetAgreements = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetAgreements", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.GetAgrementFromBase = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/GetAgrementFromBase", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetCallHistChargeList = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetCallHistChargeList", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberChargeCallHist = function (Msisdn, RepId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberChargeCallHist", { "Msisdn": Msisdn, "RepId": RepId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.ReregistrationApprovalPDF = function (Msisdn, OldOwner, NewOwner, SimIccid) {
        return $http.post("/SubscribersManagment/SubscribersManagment/ReregistrationApprovalPDF", { "Msisdn": Msisdn, "OldOwner": OldOwner, "NewOwner": NewOwner, "SimIccid": SimIccid }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.ReregistrationWishPDF = function (Msisdn, OldOwner, NewOwner, SimIccid) {
        return $http.post("/SubscribersManagment/SubscribersManagment/ReregistrationWishPDF", { "Msisdn": Msisdn, "OldOwner": OldOwner, "NewOwner": NewOwner, "SimIccid": SimIccid }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberReRegistration = function (Msisdn, NewCoinAccountId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberReRegistration", { "Msisdn": Msisdn, "NewCoinAccountId": NewCoinAccountId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberCoinTerminate = function (Msisdn, IsCash) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberCoinTerminate", { "Msisdn": Msisdn, "IsCash": IsCash }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SoGetRcData = function (SoId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SoGetRcData", { "SoId": SoId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetDeviceInfo = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetDeviceInfo", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberVoucherRecharge = function (Msisdn, SecretCode) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberVoucherRecharge", { "Msisdn": Msisdn, "SecretCode": SecretCode }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AddOfferAgreement = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AddOfferAgreement", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberCallHistChargeOrder = function (Msisdn, FromToDateString) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberCallHistChargeOrder", { "Msisdn": Msisdn, "FromToDateString": FromToDateString }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberChargeRepCallHist = function (msisdn, repId, startDate, endDate) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberChargeRepCallHist", { "msisdn": msisdn, "repId": repId, "startDate": startDate, "endDate": endDate }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSplitBalanceAppendixDoc = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSplitBalanceAppendixDoc", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetPassportDataByMSISDNShort = function (msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetPassportDataByMSISDNShort", { "Msisdn": msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberLocationInfo = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberLocationInfo", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberGetByIccId = function (IccId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetByIccId", { "IccId": IccId }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.AccountGetBalances = function (AccountNo) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetBalances", { "AccountNo": AccountNo }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberSetTFLPassword = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetTFLPassword", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberTemporaryFraudLock = function (Msisdn, Password) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberTemporaryFraudLock", { "Msisdn": Msisdn, "Password": Password }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberInquiryRefundDoc1 = function (TermId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberInquiryRefundDoc1", { "TermId": TermId }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberGetIMEIList = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetIMEIList", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberGetIMEIList_1 = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetIMEIList_1", {}, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberGetIMEIList_cust2 = function (GroupId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetIMEIList_cust2", { "GroupId": GroupId }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberSetHuaweiIMEI = function (Msisdn, Imei, ImeiId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetHuaweiIMEI", { "Msisdn": Msisdn, "Imei": Imei, "ImeiId": ImeiId }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.getTerminationPDFClicks = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/getTerminationPDFClicks", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberCheckSpareSim = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberCheckSpareSim", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberGetSpareSimRanges = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetSpareSimRanges", {}, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberGetSpareSimbyRange = function (Range) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetSpareSimbyRange", { "Range": Range }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberSetSpareSim = function (Msisdn, SimId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetSpareSim", { "Msisdn": Msisdn, "SimId": SimId }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberUnbindBindMO = function (List, ClientId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberUnbindBindMO", { "List": List, "ClientId": ClientId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetComments1 = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetComments1", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetLoadRedcomments = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetRedcomments", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberAddRedCommentMO = function (List, CommentId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberAddRedCommentMO", { "List": List, "CommentId": CommentId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberRecreate = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberRecreate", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberMADVOff = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberMADVOff", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGetPromisePaymentInfo = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGetPromisePaymentInfo", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGet3dAccess = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGet3dAccess", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSet3dAccess = function (Msisdn, IsNotAgree) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSet3dAccess", { "Msisdn": Msisdn, "IsNotAgree": IsNotAgree }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.UserChkAccessMsisdn = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/UserChkAccessMsisdn", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberTransferFunds = function (MsisdnSrc, MsisdnDst, Amount, Comment) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberTransferFunds", { "MsisdnSrc": MsisdnSrc, "MsisdnDst": MsisdnDst, "Amount": Amount, "Comment": Comment }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberDocMoneyTransfer = function (msisdnSrc, msisdnDst, transferSum) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberDocMoneyTransfer", { "msisdnSrc": msisdnSrc, "msisdnDst": msisdnDst, "transferSum": transferSum }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberGenRefundPdf = function (SubscriberId, Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberGenRefundPdf", { "SubscriberId": SubscriberId, "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberReregBonus = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberReregBonus", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberPaycomProfDeact = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberPaycomProfDeact", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberBaseUpdate = function (Msisdn, Fname, Lname, Mname) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberBaseUpdate", { "Msisdn": Msisdn, "Fname": Fname, "Lname": Lname, "Mname": Mname }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSetDeviceIMEI = function (Msisdn, Imei, ImeiId, ModelId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetDeviceIMEI", { "Msisdn": Msisdn, "Imei": Imei, "ImeiId": ImeiId, "ModelId": ModelId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberSetDeviceIMEI_cust1 = function (Msisdn, Imei, ImeiId, ModelId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberSetDeviceIMEI_cust1", { "Msisdn": Msisdn, "Imei": Imei, "ImeiId": ImeiId, "ModelId": ModelId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.ChangePlatformPdf = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/ChangePlatformPdf", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    }

    this.SubscriberAssignZakazMb = function (Msisdn, TrafficAmount) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberAssignZakazMb", { "Msisdn": Msisdn, "TrafficAmount": TrafficAmount }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountCallHistPay = function (accountNo, numAmount, monthAmount, isFree) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountCallHistPay", { "accountNo": accountNo, "numAmount": numAmount, "monthAmount": monthAmount, "isFree": isFree }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountGetAgentList = function () {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountGetAgentList", {}, { headers: { 'Content-Type': 'application/json' } });
    };

    this.AccountSetAgent = function (accountNo, agentId, clientId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/AccountSetAgent", { "accountNo": accountNo, "agentId": agentId, "clientId": clientId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.GetWarranty = function (deviceId) {
        return $http.post("/SubscribersManagment/SubscribersManagment/GetWarranty", { "deviceId": deviceId }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.GetRhtOrderList = function (Msisdn) {
        return $http.post("/SubscribersManagment/SubscribersManagment/GetRhtOrderList", { "Msisdn": Msisdn }, { headers: { 'Content-Type': 'application/json' } });
    };
    
    this.GetRhtOrderDetailList = function (Msisdn, OrderId, OrderNumber) {
        return $http.post("/SubscribersManagment/SubscribersManagment/GetRhtOrderDetailList", { "Msisdn": Msisdn, "OrderId": OrderId, "OrderNumber": OrderNumber }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.SubscriberRhtOrderCancel = function (Msisdn, OrderId, OrderNumber) {
        return $http.post("/SubscribersManagment/SubscribersManagment/SubscriberRhtOrderCancel", { "Msisdn": Msisdn, "OrderId": OrderId, "OrderNumber": OrderNumber }, { headers: { 'Content-Type': 'application/json' } });
    };

    this.CreateTicketPSO = function (Msisdn, Title, Description) {
        //return $http.get("http://192.168.54.55/plugins/servlet/createIssue?callback=callback&project=OMS&type=10517&reporter=coin.user&password=htvtpjd30&assignee=snd-operators@ucell.uz&title=" + Title + "&description=" + Description + "&customfield_13790=ivan.remezov@ucell.uz&priority=3&security=10071&customfield_10391=" + Msisdn, {}, { headers: { 'Content-Type': 'application/json' } });
        
        return $http.post("/SubscribersManagment/SubscribersManagment/ticketOpenPSO", { "Msisdn": Msisdn, "Title": Title, "Description": Description }, { headers: { 'Content-Type': 'application/json' } });

    };



});


app.controller('Ctrl', function ($scope, RequestService) {
    $scope.MsisdnCommentExists = 0;
    $scope.MsisdnCommentText = "";

    $scope.$watch('msisdn', function () {
        $("#subscribers i[data-msisdnchecked=" + $scope.msisdn + "]").show();
    })

    $scope.$watch('callhist_charges', function (value) {
        if (value == "1") {
            alert('Already charged for this report');
            $('.callhist_charge_btn').addClass('disabled');
        } else {
            $('.callhist_charge_btn').removeClass('disabled');
        }
    });

    /*
        $scope.change = function () {
    
            search_type = $("#search_type_h").val();
    
            if (search_type == 1) {
                $scope.search_type_flag = "MSISDN should consist of digits and be up to 12 characters ";
                $scope.search_type_flag1 = "Enter MSISDN, please ";
                $scope.fieldpattern = /^[0-9]{12}$/;
    
    
            }
            else if (search_type == 2) {
                $scope.search_type_flag = "Account No should consist of digits";
                $scope.search_type_flag1 = "Enter Account No, please ";
                $scope.fieldpattern = /^[0-9]{1,12}$/;
    
            }
            else { }
    
        }
    */
    $scope.loadRet = function () {

        $scope.msisdn = $scope.msisdn_field;

        search_type = $("#search_type_h").val();
        $("#search_result_list").hide();
        $("#search_result_detail").hide();
        $scope.MsisdnCommentExists = 0;
        $scope.MsisdnCommentText = "";
        $scope.visa_typeselection = "";
        $scope.visa_date_arrive = "";

        if (search_type == 1) {/*by msisdn*/

            $scope.ret = {};
            $scope.ret = [];
            $scope.ret1 = {};
            $scope.ret1 = [];
            $scope.ret2 = {};
            $scope.ret2 = [];
            $scope.ret3 = {};
            $scope.ret3 = [];
            $scope.ret5 = {};
            $scope.ret5 = [];
            $scope.ret4 = {};
            $scope.ret4 = [];
            $scope.ret6 = {};
            $scope.ret6 = [];
            $scope.ret7 = {};
            $scope.ret7 = [];
            $scope.ret8 = {};
            $scope.ret8 = [];
            $scope.ret5 = {};
            $scope.ret5 = [];
            $scope.ret4 = {};
            $scope.ret4 = [];
            $scope.ClientFindByPassport = {};
            $scope.ClientFindByPassport = [];
            $scope.SubscriberGetBalances = {};
            $scope.SubscriberGetBalances = [];
            $scope.SubscriberGetED = {};
            $scope.SubscriberGetED = [];
            $scope.selectedPoforUpdate = {};
            $scope.selectedPoforUpdate = [];
            $scope.change_sim_comment_disable = 1;

            $("#search_result_detail").show();


            RequestService.getSmState($scope.msisdn, 1).success(function (res) {

                if (res.Result == "1") {

                    //ticket https://ticket.ucell.uz/browse/RDU-1507
                    RequestService.isActionAllowJS(52, 10, 19).success(function (res) {
                        $(".loading").show();
                        if (res == "1") {


                            RequestService.SubscriberGetPassportDataByMSISDNShort($scope.msisdn).success(function (sd1) {
                                //$(".loading").hide();
                                $(".sm-tabs").removeClass("active");
                                $(".tab-content div").removeClass("active");

                                $("#sub_responsible_tab").removeClass("active");
                                $("#p_personal_passport_information").removeClass("active");
                                $("#sub_responsible_tab").show();
                                $("#main_info_tab, #main_balance_tab, #main_offers_tab, #main_ext_data_tab, #main_comments, #main_maintains_tab, #offers, #exdata, #maintenance, #comments, #info, #balances, #main_account_tab, #main_subscribers_tap, #account, #subscribers").hide();
                                $("#main_account_tab, #account").removeClass("active");
                                $("#sub_responsible_tab").removeClass("active");
                                $("#sub_responsible_tab").hide();
                                $("#main_subscribers_tap").removeClass("active");

                                if (confirm("Вы действительно хотите перейти к просмотру персональных данных абонента - " + $scope.msisdn + " " + sd1.LastName + " " + sd1.FirstName + " " + sd1.MiddleName)) {
                                    //$(".loading").hide();

                                    $("#main_info_tab, #main_balance_tab, #main_offers_tab, #main_ext_data_tab, #main_comments, #main_maintains_tab, #main_account_tab, #main_subscribers_tap").show();

                                    $("#all_tabs_content").find(".main-sm-tab").removeAttr("style");
                                    $("#search_result_detail .sm-tabs li").removeClass("active");
                                    $("#all_tabs_content").find(".main-sm-tab").removeClass("active");

                                    $("#sub_responsible_tab").addClass("active");
                                    $("#sub_responsible_tab").show();

                                    $("#main_info_tab").addClass("active");
                                    $("#info").addClass("active");

                                    loadMainByMsisdn();

                                } else {
                                    alert("Вы отменили дальнейший просмотр, но мы все равно записали Ваше действие");
                                    $(".loading").hide();
                                    ClearAllScopeData();

                                }

                            });

                        } else {
                            //ClearAllScopeData();
                            loadMainByMsisdn();
                        }

                    });


                } else {
                    alert(res.Response.replace(/\"/g, ""));
                    $(".loading").hide();
                }

            });

            //} else {
            //    alert(res.Response.replace(/\"/g, ""));
            //    $(".loading").hide();
            //}
            // });



        } else if (search_type == 2) {/*by account_no*/
            $scope.ret = {};
            $scope.ret = [];
            $scope.ret2 = {};
            $scope.ret2 = [];
            $scope.ret6 = {};
            $scope.ret6 = [];
            $scope.ret5 = {};
            $scope.ret5 = [];
            $scope.ClientFindByPassport = {};
            $scope.ClientFindByPassport = [];


            $("#search_result_detail").show();

            RequestService.getSmState($scope.msisdn, 2).success(function (res) {

                if (res.Result == "1") {

                    RequestService.AccountGetOrganizationInfo($scope.msisdn).success(function (data) {

                        $(".loading").hide();
                        $(".sm-tabs").removeClass("active");
                        $(".tab-content div").removeClass("active");

                        $("#main_info_tab, #main_balance_tab, #main_offers_tab, #main_ext_data_tab, #main_comments, #main_maintains_tab, #offers, #exdata, #maintenance, #comments, #info, #balances").hide();
                        $("#main_account_tab, #account").addClass("active");

                        $("#sub_responsible_tab").removeClass("active");
                        $("#sub_responsible_tab").addClass("disabled");
                        $("#sub_responsible_tab").hide();

                        $("#main_subscribers_tap").removeClass("active");


                        $scope.ret2 = data;
                        AccountGetBillingInfo($scope.msisdn);
                        SubscriberGetSubscribersByClientId(data.ClientId);

                        AccountGetBalances($scope.msisdn);

                    });

                } else {
                    alert(res.Response.replace(/\"/g, ""));
                    $(".loading").hide();
                }

            });


        } else if (search_type == 3) {/*by passport sn/no*/
            $scope.ret = "";
            RequestService.getSmState($scope.msisdn, 2).success(function (res) {

                if (res.Result == "1") {

                    RequestService.SubscriberGetByPassportSN($scope.msisdn).success(function (data) {

                        $("#search_result_detail").show();
                        console.log(data);

                        $scope.ret = data;
                        SubscriberGetSubscribersByClientId(data.ClientId);
                        $(".loading").hide();

                        $("#account-1").removeClass("active");
                        $("#li_account_account").removeClass("active");
                        $("#sub_responsible_tab").addClass("active");
                        $("#p_personal_passport_information").addClass("active");

                        $("#li_account_account").hide();
                        $("#li_subscr-1").hide();
                        $("#sub_responsible_tab").show();

                        $("#changeplatform_who_pay").hide();
                        $("#changeplatform_who_pay1").hide();
                        $("#main_info_tab, #main_balance_tab, #main_offers_tab, #main_ext_data_tab, #main_comments, #main_maintains_tab, #offers, #exdata, #maintenance, #comments, #info, #balances").hide();
                        $("#main_account_tab, #account").addClass("active");

                        SubscriberGetSubscribersByClientId(data.ClientId);

                    });

                } else {
                    alert(res.Response.replace(/\"/g, ""));
                    $(".loading").hide();
                }

            });



        } else if (search_type == 4) {/*by contract id*/
            alert("Search by Contract Id not ready yet!");

        } else if (search_type == 5) {/*by ssn*/
            $("#search_result_list").show();


            RequestService.SubscriberGetSubscribersBySsn($scope.msisdn).success(function (data1) {
                $scope.ret1 = data1;
                $(".loading").hide();
            });


        } else if (search_type == 6) {/*Coin SubscrId*/
            $scope.ret = {};
            $scope.ret = [];
            $scope.ClientFindByPassport = {};
            $scope.ClientFindByPassport = [];

            RequestService.getSmState($scope.msisdn, 3).success(function (res) {

                if (res.Result == "1") {

                    RequestService.SubscriberGetPassportDataBySubscriberId($scope.msisdn).success(function (data) {
                        $scope.ret = data;
                        $scope.SubscriberId = $scope.msisdn;
                        Msisdn = $scope.msisdn;
                        if (Msisdn.length != 12) {
                            Msisdn = $("#subscriber_id").val();
                        }

                        $("#msisdn_banner_JOO h2").text(Msisdn.replace(/(\d{3})\D?(\d{2})\D?(\d{5})/, "$1 $2 $3"));

                        if ($scope.ret.PassportNumber == null) {

                            if (confirm("SubscriberId not assigned to passport. Would you like to assign passport?")) {

                                $.fancybox({ 'href': '#popup_bind_msisdn' });

                            } else {
                                alert("You canceled this action");
                                $(".loading").hide();
                            }

                        }

                        if ($scope.ret.IsPostPaid == "0") {

                            setTimeout(function () {
                                $("#account-1").removeClass("active");
                                $("#li_account_account").removeClass("active");
                                $("#sub_responsible_tab").addClass("active");
                                $("#p_personal_passport_information").addClass("active");

                                $("#li_account_account").hide();
                                $("#li_subscr-1").hide();
                                $("#sub_responsible_tab").show();

                                $("#search_result_detail").show();


                                Msisdn = $scope.msisdn;
                                if (Msisdn.length != 12) {
                                    Msisdn = $("#subscriber_id").val();
                                    //alert("Getting msisdn from another source " + Msisdn);
                                }
                                /*GET Subscriber documents state*/
                                RequestService.SubscriberGetDocsState(Msisdn).success(function (SubscriberGetDocsState) {

                                    if (SubscriberGetDocsState.PassportPresent == "1") {
                                        $("#passport_in_stock").prop('checked', true);
                                    } else {
                                        $("#passport_in_stock").prop('checked', false);
                                    }

                                    if (SubscriberGetDocsState.PassportCorrect == "1") {
                                        $("#passport_correct").prop('checked', true);
                                    } else {
                                        $("#passport_correct").prop('checked', false);
                                    }

                                    if (SubscriberGetDocsState.AgreementPresent == "1") {
                                        $("#agreement_in_stock").prop('checked', true);
                                    } else {
                                        $("#agreement_in_stock").prop('checked', false);
                                    }

                                    if (SubscriberGetDocsState.AgreementCorrect == "1") {
                                        $("#agreement_correct").prop('checked', true);
                                    } else {
                                        $("#agreement_correct").prop('checked', false);
                                    }

                                    if (data.ClientId != null) {
                                        $("#msisdn_bind_unbind").text("Unbind");
                                    } else {
                                        $("#msisdn_bind_unbind").text("Bind");
                                    }

                                });

                            }, 500);

                        } else {

                            $("#p_personal_passport_information").removeClass("active");
                            $("#p_personal_passport_information").addClass("disabled");
                            $("#lnk_sub_responsible_tab").addClass("disabled");
                            $("#sub_responsible_tab").removeClass("active");
                            $("#sub_responsible_tab").addClass("disabled");

                            $("#li_account_account").addClass("active");
                            $("#li_account_account").removeClass("disabled");
                            $("#lnk_account_account").removeClass("disabled");
                            $("#account-1").addClass("active");

                            $("#li_account_account").show();
                            $("#li_subscr-1").show();
                            $("#sub_responsible_tab").hide();
                        }

                        if (data.ClientId != null) {
                            $("#msisdn_bind_unbind").text("Unbind");
                        } else {
                            $("#msisdn_bind_unbind").text("Bind");
                            $scope.ret.ClientId = "";
                        }

                        $(".loading").hide();
                    });

                } else {
                    alert(res.Response.replace(/\"/g, ""));
                    $(".loading").hide();
                }

            });


        } else if (search_type == 7) {/*by iccid*/

            RequestService.getSmState($scope.msisdn, 2).success(function (res) {

                if (res.Result == "1") {

                    $scope.ret = {};
                    $scope.ret = [];
                    RequestService.SubscriberGetByIccId($scope.msisdn).success(function (data) {

                        $("#search_result_detail").show();

                        $scope.ret = data;
                        SubscriberGetSubscribersByClientId(data.ClientId);
                        $(".loading").hide();

                        $("#account-1").removeClass("active");
                        $("#li_account_account").removeClass("active");
                        $("#sub_responsible_tab").addClass("active");
                        $("#p_personal_passport_information").addClass("active");

                        $("#li_account_account").hide();
                        $("#li_subscr-1").hide();
                        $("#sub_responsible_tab").show();

                        $("#changeplatform_who_pay").hide();
                        $("#changeplatform_who_pay1").hide();
                        $("#main_info_tab, #main_balance_tab, #main_offers_tab, #main_ext_data_tab, #main_comments, #main_maintains_tab, #offers, #exdata, #maintenance, #comments, #info, #balances").hide();
                        $("#main_account_tab, #account").addClass("active");
                        $("#main_subscribers_tap, #subscribers").removeClass("active");

                        SubscriberGetSubscribersByClientId(data.ClientId);
                        $scope.msisdn = data.Msisdn;
                    });

                } else {
                    alert(res.Response.replace(/\"/g, ""));
                    $(".loading").hide();
                }

            });



        } else {/*default is by msisdn*/

            $scope.ret = {};
            $scope.ret = [];
            $scope.ret1 = {};
            $scope.ret1 = [];
            $scope.ret2 = {};
            $scope.ret2 = [];
            $scope.ret3 = {};
            $scope.ret3 = [];
            $scope.ret5 = {};
            $scope.ret5 = [];
            $scope.ret4 = {};
            $scope.ret4 = [];
            $scope.ret6 = {};
            $scope.ret6 = [];
            $scope.ret7 = {};
            $scope.ret7 = [];
            $scope.ret8 = {};
            $scope.ret8 = [];
            $scope.ret5 = {};
            $scope.ret5 = [];
            $scope.ret4 = {};
            $scope.ret4 = [];
            $scope.ClientFindByPassport = {};
            $scope.ClientFindByPassport = [];
            $scope.SubscriberGetBalances = {};
            $scope.SubscriberGetBalances = [];
            $scope.SubscriberGetED = {};
            $scope.SubscriberGetED = [];
            $scope.selectedPoforUpdate = {};
            $scope.selectedPoforUpdate = [];
            $scope.change_sim_comment_disable = 1;
            $scope.MsisdnCommentExists = 0;
            $scope.MsisdnCommentText = "";
            
            $("#search_result_detail").show();

            RequestService.getSmState($scope.msisdn, 1).success(function (res) {

                if (res.Result == "1") {

                    //tickethttps://ticket.ucell.uz/browse/RDU-1507
                    RequestService.isActionAllowJS(52, 10, 19).success(function (res) {
                        $(".loading").show();
                        if (res == "1") {
                            
                            RequestService.SubscriberGetPassportDataByMSISDNShort($scope.msisdn).success(function (sd1) {
                                //$(".loading").hide();
                                $(".sm-tabs").removeClass("active");
                                $(".tab-content div").removeClass("active");

                                $("#sub_responsible_tab").removeClass("active");
                                $("#p_personal_passport_information").removeClass("active");
                                $("#sub_responsible_tab").show();
                                $("#main_info_tab, #main_balance_tab, #main_offers_tab, #main_ext_data_tab, #main_comments, #main_maintains_tab, #offers, #exdata, #maintenance, #comments, #info, #balances, #main_account_tab, #main_subscribers_tap, #account, #subscribers").hide();
                                $("#main_account_tab, #account").removeClass("active");
                                $("#sub_responsible_tab").removeClass("active");
                                $("#sub_responsible_tab").hide();
                                $("#main_subscribers_tap").removeClass("active");

                                if (confirm("Вы действительно хотите перейти к просмотру персональных данных абонента - " + $scope.msisdn + " " + sd1.LastName + " " + sd1.FirstName)) {
                                    //$(".loading").hide();

                                    $("#main_info_tab, #main_balance_tab, #main_offers_tab, #main_ext_data_tab, #main_comments, #main_maintains_tab, #main_account_tab, #main_subscribers_tap").show();

                                    $("#all_tabs_content").find(".main-sm-tab").removeAttr("style");
                                    $("#search_result_detail .sm-tabs li").removeClass("active");
                                    $("#all_tabs_content").find(".main-sm-tab").removeClass("active");

                                    $("#sub_responsible_tab").addClass("active");
                                    $("#sub_responsible_tab").show();

                                    $("#main_info_tab").addClass("active");
                                    $("#info").addClass("active");

                                    loadMainByMsisdn();

                                } else {
                                    alert("Вы отменили дальнейший просмотр, но мы все равно записали Ваше действие");
                                    $(".loading").hide();
                                    ClearAllScopeData();

                                }

                            });

                        } else {
                            loadMainByMsisdn();
                        }

                    });


                } else {
                    alert(res.Response.replace(/\"/g, ""));
                    $(".loading").hide();
                }

            });


        }

    };



    /*Click from Subscribers Tab*/
    $scope.loadRetByMsisdn = function (p_msisdn, coin_state) {
        $(".loading").show();

        $scope.msisdn = p_msisdn;
        $scope.msisdn_field = p_msisdn;


        if (coin_state != "Active") {
            $(".loading").hide();
            alert("Данный абонент не активен в коине, и возможно пренадлежит другому клиенту. Вводите его напрямую через поиск!");
        } else {

            $scope.SubscriberGet3dPartyAccess(p_msisdn);

            $("#main_info_tab, #main_balance_tab, #main_offers_tab, #main_ext_data_tab, #main_comments, #main_maintains_tab").show();

            $("#all_tabs_content").find(".main-sm-tab").removeAttr("style");
            $("#search_result_detail .sm-tabs li").removeClass("active");
            $("#all_tabs_content").find(".main-sm-tab").removeClass("active");


            $("#main_info_tab").addClass("active");
            $("#info").addClass("active");

            $(".search-sm-text-input").val(p_msisdn);
            $("#msisdn_banner_JOO h2").text(p_msisdn.replace(/(\d{3})\D?(\d{2})\D?(\d{5})/, "$1 $2 $3"));



            RequestService.SubscriberGetPassportDataByMSISDN(p_msisdn).success(function (data) {
                //console.log(data);
                $scope.ret = data;
                SubscriberCampaignList(p_msisdn);
                
                RequestService.SubscriberGetC1Info(p_msisdn).success(function (data3) {
                    $(".loading").hide();
                    $scope.ret3 = data3;
                    //SubscriberGetAssignedOfferList(data3.SubscrNo);
                    SubscriberGetAssignedOfferList(p_msisdn);

                });

                SubscriberGetSimInfo(p_msisdn);
                AccountGetOwnerMsisdn(p_msisdn);
                SubscriberBalances(p_msisdn);
                $scope.msisdn = p_msisdn;
            });

        }

    };





    /*Click from search_result_list*/
    $scope.loadRetByAccount = function (p_account_no) {
        $(".loading").show();

        $("#search_result_list").hide();
        $("#search_result_detail").show();

        $(".sm-tabs").removeClass("active");
        $(".tab-content div").removeClass("active");

        $("#main_info_tab, #main_balance_tab, #main_offers_tab, #main_ext_data_tab, #main_comments, #main_maintains_tab, #offers, #exdata, #maintenance, #comments, #info, #balances").hide();
        $("#main_account_tab, #account").addClass("active");

        RequestService.AccountGetOrganizationInfo(p_account_no).success(function (data) {
            $(".loading").hide();
            $scope.ret2 = data;
            AccountGetBillingInfo(p_account_no);
            SubscriberGetSubscribersByClientId(data.ClientId);
        });

    };


    function AccountGetOrganizationInfo(accountNo) {
        RequestService.AccountGetOrganizationInfo(accountNo).success(function (data2) {
            $scope.ret2 = data2;
        });
    };

    function SubscriberGetC1Info(msisdn) {
        RequestService.SubscriberGetC1Info(msisdn).success(function (data3) {
            $scope.ret3 = data3;
        });
    };

    function SubscriberGetSimInfo(msisdn) {
        RequestService.SubscriberGetSimInfo(msisdn).success(function (data4) {
            $scope.ret4 = data4;


            if (data4.ImsiD.length > 3) {
                $(".dual-sim-pdf").show();
            } else {
                $(".dual-sim-pdf").hide();
            }

        });
    };

    function AccountGetBillingInfo(accountNo) {
        RequestService.AccountGetBillingInfo(accountNo).success(function (data5) {
            $scope.ret5 = data5;
            $scope.ret5.AccountNo = accountNo;
        });
    };


    function AccountGetOwnerMsisdn(msisdn) {
        RequestService.AccountGetOwnerMsisdn(msisdn).success(function (data6) {
            $scope.ret6 = data6;
        });
    };

    function SubscriberGetSubscribersByClientId(clientID) {
        RequestService.SubscriberGetSubscribersByClientId(clientID).success(function (data1) {
            $scope.ret1 = data1;
            console.log($scope.ret1);
        });
    }

    function SubscriberGetAssignedOfferList(subscrNo) {
        RequestService.SubscriberGetAssignedOfferList(subscrNo).success(function (data7) {
            $scope.ret7 = data7;
            //$(".loading").hide(); after meeting
        });
    }

    function SubscriberCampaignList(msisdn) {
        RequestService.SubscriberCampaignList(msisdn).success(function (data8) {
            $scope.ret8 = data8;

        });
    }

    function SubscriberBalances(msisdn) {
        RequestService.SubscriberGetBalances(msisdn).success(function (SubscriberGetBalances) {
            $scope.SubscriberGetBalances = SubscriberGetBalances;
        });
    }

    function SubscriberGetED(msisdn) {
        RequestService.SubscriberGetED(msisdn).success(function (SubscriberGetED) {
            $scope.SubscriberGetED = SubscriberGetED;
        });
    }

    function SubscriberGetAccumList(subscrNo) {
        RequestService.SubscriberGetAccumList(subscrNo).success(function (SubscriberGetAccumList) {
            $scope.SubscriberGetAccumList = SubscriberGetAccumList;
        });
    }

    function SubscriberGetPoRCOverride(msisdn) {
        RequestService.SubscriberGetPoRCOverride(msisdn).success(function (SubscriberGetPoRCOverride) {
            $scope.SubscriberGetPoRCOverride = SubscriberGetPoRCOverride;
        });
    }

    function AccountGetBalances(AccountNo) {
        RequestService.AccountGetBalances(AccountNo).success(function (data1) {
            $scope.AccountBalances = data1;
        });
    }

    $scope.showGalochka = function (msisdn) {
        if (msisdn == $scope.msisdn) {
            return 1;
        }

    }


    /*Begin get po list, swap po*/
    $scope.loadPoList = function () {
        $(".loading").show();
        RequestService.SubscriberGetPOList($scope.msisdn).success(function (data9) {
            $(".loading").hide();
            $scope.ret9 = data9;
        });

    };

    $scope.loadAccounDeliveryGroupList = function () {
        $(".loading").show();
        RequestService.AccountGetDeliveryGroupList().success(function (AccounDeliveryGroupList) {
            $(".loading").hide();
            $scope.AccounDeliveryGroupList = AccounDeliveryGroupList;
        });

    };

    $scope.action_change_po = function () {

        NewPoId = $("#new_po_id").val();
        OldPoId = $("#old_po_id").val();
        ChargeState = $("#choose_po_free_state").val();

        if (confirm("Are you sure you want to Swap PO?")) {
            $(".loading").show();
            RequestService.SubscriberSwapPo($scope.msisdn, NewPoId, OldPoId, ChargeState).success(function (data10) {
                $(".loading").hide();
                $scope.ret10 = data10;
                alert(data10.replace(/\"/g, ""));
                $.fancybox.close();
            });
        } else {
            alert("You canceled this action");
            $(".loading").hide();
            $.fancybox.close();
        }


    };
    /*End get po list, swap po*/


    /*Begin get state list, swap state*/
    $scope.loadStateList = function () {
        $(".loading").show();

        if ($scope.ret3) {

            RequestService.SubscriberGetStateList($scope.ret3.CurrentStateId).success(function (data11) {
                $(".loading").hide();
                $scope.ret11 = data11;
            });
        } else {
            $(".loading").hide();

        }
    };

    $scope.action_change_state = function () {
        $(".loading").show();

        NewState = $("#new_state_id").val();

        if (confirm("Are you sure you want to change subscriber state?")) {
            $(".loading").show();
            RequestService.SubscriberUpdateState($scope.msisdn, NewState).success(function (data12) {
                $(".loading").hide();
                $scope.ret12 = data12;
                alert(data12.replace(/\"/g, ""));
                $.fancybox.close();
            });
        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };
    /*End get state list, swap state*/

    /*Begin get lang list, change lang*/
    $scope.action_change_language = function () {

        NewLanguageId = $("#new_language_id").val();

        if (confirm("Are you sure you want to change subscriber language?")) {
            $(".loading").show();
            RequestService.SubscriberUpdateLanguage($scope.msisdn, NewLanguageId).success(function (data13) {
                $(".loading").hide();
                $scope.ret13 = data13;

                if (data13.Result.replace(/\"/g, "") == "1") {
                    result = "Success!";
                } else {
                    result = "Unsuccess!";
                }
                alert(result + " Response: " + data13.Response.replace(/\"/g, ""));
                $.fancybox.close();
            });
        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };
    /*End get lang list, change lang*/

    /*Begin get lang list, change lang*/
    $scope.action_change_fraud_state = function () {

        NewFraudState = $("#new_fraud_state_id").val();
        Comment = $("#fraud_state_comment").val();
        PrevFraudState = $("#prev_fraud_state_id").val();

        if (confirm("Are you sure you want to change subscriber FraudState?")) {
            $(".loading").show();
            RequestService.SubscriberUpdateFraudState($scope.msisdn, NewFraudState, Comment, PrevFraudState).success(function (data14) {
                $(".loading").hide();
                $scope.ret14 = data14;
                alert("Response" + data14.replace(/\"/g, ""));
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };
    /*End get lang list, change lang*/


    /*Begin get Account Rating State, set new Account State*/
    $scope.loadAccountStateList = function () {
        RequestService.AccountGetRatingStateList().success(function (AccountGetRatingStateList) {
            $scope.AccountGetRatingStateList = AccountGetRatingStateList;
        });
    };

    $scope.action_change_account_state = function () {

        NewAccountState = $("#new_account_state_id").val();
        OldAccountState = $scope.ret5.StateId;
        AccountNo = $scope.ret5.AccountNo;

        if (confirm("Are you sure you want to change account state?")) {
            $(".loading").show();
            RequestService.AccountChangeRatingState(AccountNo, NewAccountState, OldAccountState).success(function (data12) {
                $(".loading").hide();
                alert("Response: " + data12.replace(/\"/g, ""));
            });


        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };

    /*End get Account Rating State, set new Account State*/


    /*Begin Accout set access code*/
    $scope.action_change_access_code = function () {

        NewAccessCode = $("#new_access_code").val();
        OldAccessCode = $scope.ret5.AccessCode;
        ClientId = $scope.ret5.ClientId;

        if (confirm("Are you sure you want to change account acceess code?")) {
            $(".loading").show();
            RequestService.AccountSetAccessCode(ClientId, NewAccessCode, OldAccessCode, $scope.ret5.AccountNo).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

        /*End Accout set access code*/


    };


    /*Begin acount get category list, set new accoutn category*/
    $scope.loadAccountGetCategoryList = function () {
        RequestService.AccountGetCategoryList().success(function (AccountGetCategoryList) {
            $scope.AccountGetCategoryList = AccountGetCategoryList;
        });
    };

    $scope.action_account_update_category = function () {

        newAccountCategory = $("#new_account_category_id").val();
        accountNo = $scope.ret5.AccountNo;
        oldAccountCategor = $scope.ret5.CategoryId;

        if (confirm("Are you sure you want to change account category?")) {
            $(".loading").show();
            RequestService.AccountUpdateCategory(accountNo, newAccountCategory, oldAccountCategor).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }


    };

    /*end acount get category list, set new accoutn category*/

    /*Begin account get segment list, set new segment*/
    $scope.loadAccountSegmentList = function () {
        RequestService.AccountGetSegmentGroupList().success(function (AccountGetSegmentGroupList) {
            $scope.AccountGetSegmentGroupList = AccountGetSegmentGroupList;
        });
    };

    $scope.action_account_update_segment_group = function () {

        new_segment_group = $("#new_account_segment_group").val();
        account_no = $scope.ret5.AccountNo;
        old_segment_group = $scope.ret5.SegmentGroupId;

        if (confirm("Are you sure you want to change account segment group?")) {
            $(".loading").show();
            RequestService.AccountSetSegmentGroup(account_no, new_segment_group, old_segment_group).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }


    };

    /*End account get segment list, set new segment*/


    /*Begin change account data*/
    $scope.action_change_account_data = function () {

        if (confirm("Are you sure you want to change account data?")) {
            $(".loading").show();
            RequestService.AccountUpdateData($scope.ret2).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }


    };
    /*End change account data*/


    /*Begin account set notification template*/
    $scope.action_account_set_notification_template = function () {
        account_no = $scope.ret5.AccountNo;
        template_id = $("#account_notification_template").val();

        if (confirm("Are you sure you want to change account Notification template?")) {
            $(".loading").show();
            RequestService.AccountSetNotificationTemplate(account_no, template_id).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }


    };


    $scope.action_account_notification_language = function () {
        var account_no = $scope.ret5.AccountNo;
        msisdn = $("#account_notification_msisdn").val();
        var newAccountlanguage = $("#new_account_notification_language").val();

        if (confirm("Are you sure you want to change account Notification language?")) {
            $(".loading").show();
            RequestService.AccountSetNotificationLang(account_no, msisdn, '0', '1', newAccountlanguage).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }


    };

    $scope.action_account_notification_remove = function () {
        var account_no = $scope.ret5.AccountNo;
        msisdn = $("#account_notification_msisdn").val();
        var newAccountlanguage = $("#new_account_notification_language").val();

        if (confirm("Are you sure you want to remove account Notification language?")) {
            $(".loading").show();
            RequestService.AccountSetNotificationLang(account_no, msisdn, '1', '0', newAccountlanguage).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };

    /*End account set notification template*/

    /*Begin Get subscriber balances, updated/set balance */
    $scope.loadSubscriberGetBalanceValue = function (balance_id) {

        $(".balance_update_set").prop("checked", true);
        $(".balance_update_adj").prop("checked", false);
        $("#popup_update_balance #update_type").val(1);
        $("#balance_update_comment, #core_balance_valueXX").val('');
        $scope.SubscriberGetBalanceValue = []

        $scope.SubscriberGetBalanceValue.BalanceId = balance_id;

        var newVal = $("#popup_update_balance #core_balance_valueXX").val();
        var startVal = $("#popup_update_balance #core_static_hidden").val();
        var statFl = (parseFloat(startVal) * 100 + parseFloat(newVal) * 100) / 100;

        RequestService.SubscriberGetBalanceValue($scope.msisdn, balance_id).success(function (SubscriberGetBalanceValue) {
            $scope.SubscriberGetBalanceValue.push(SubscriberGetBalanceValue);
            $scope.SubscriberGetBalanceValue.push({ BalanceAvailableStatic: SubscriberGetBalanceValue.BalanceAvailable });
            console.log($scope.SubscriberGetBalanceValue);

        });

    };

    $scope.coreChangeTo = function (choice) {
        var newVal = $("#popup_update_balance #core_balance_valueXX").val();
        var startVal = $("#popup_update_balance #core_static_hidden").val();
        var adjVal = (parseFloat($("#popup_update_balance #core_static_hidden").val()) * 100 + parseFloat($("#core_balance_valueXX").val()) * 100) / 100;

        if (newVal) {
            if (choice == 1) {
                $(".balance_update_set").prop("checked", true);
                $(".balance_update_adj").prop("checked", false);
                $("#popup_update_balance #update_type").val(1);
                $scope.SubscriberGetBalanceValue[0].BalanceAvailable = newVal;
            }
            else if (choice == 2) {
                $(".balance_update_set").prop("checked", false);
                $(".balance_update_adj").prop("checked", true);
                $("#popup_update_balance #update_type").val(2);
                $scope.SubscriberGetBalanceValue[0].BalanceAvailable = adjVal;
            }
            if (choice == 3) {
                if ($(".balance_update_set").prop("checked") == true) {
                    $(".balance_update_set").prop("checked", true);
                    $(".balance_update_adj").prop("checked", false);
                    $("#popup_update_balance #update_type").val(1);
                    $scope.SubscriberGetBalanceValue[0].BalanceAvailable = newVal;
                }
                else if ($(".balance_update_adj").prop("checked") == true) {
                    $(".balance_update_set").prop("checked", false);
                    $(".balance_update_adj").prop("checked", true);
                    $("#popup_update_balance #update_type").val(2);
                    $scope.SubscriberGetBalanceValue[0].BalanceAvailable = adjVal;
                }
            }
        }
    };



    $scope.action_subscriber_update_balance = function () {
        update_type = $("#update_type").val();
        balance_id = $("#balance_id").val();
        total_balance = $("#core_balance_valueXX").val();
        old_total_balance = $("#old_total_balance").val();
        mtr_comment = $("#balance_update_comment").val();
        expiration_date = $("#balance_exp_date").val();

        //alert("Update type = " + update_type);

        if (confirm("Are you sure you want to update balance?")) {
            $(".loading").show();
            RequestService.SubscriberUpdateBalance($scope.msisdn, update_type, balance_id, total_balance, old_total_balance, mtr_comment, expiration_date).success(function (response) {

                $scope.SubscriberGetBalanceValue.BalanceAvailable = "";

                $(".loading").hide();
                alert(response.ResponseText.replace(/\"/g, ""));
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }


    };

    /*
    $scope.optionsRadios1 = function (param1) {
        
        var radioId = $(this).attr("id");
        var newValC = $("#popup_update_balance #core_balance_valueXX").val();
        var adjVal = (parseFloat($("#popup_update_balance #core_static_hidden").val()) * 100 + parseFloat($("#core_balance_valueXX").val()) * 100) / 100;

        if (param1 == 1) {
            //$("#popup_update_balance #core_static").val(newValC);
            //$("#popup_update_balance #update_type").val(1);
            $scope.SubscriberGetBalanceValue.BalanceAvailable = newValC;
        }
        else if (param1 == 2) {
            //$("#popup_update_balance #core_static").val(adjVal);
            //$("#popup_update_balance #update_type").val(2);
            $scope.SubscriberGetBalanceValue.BalanceAvailable = adjVal;
        }
        
    };
    */


    /*End Get subscriber balances, updated/set balance*/

    /*Begin Disconnect subscriber*/
    $scope.action_subscriber_disconnect = function () {
        Comment = $("#disconnect_subscriber_comment").val();
        if (confirm("Are you sure you want to disconnect subscriber?")) {
            $(".loading").show();
            RequestService.SubscriberDisconnect($scope.msisdn, Comment).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };
    /*End Disconnect subscriber*/

    /*Begin Subscriber Disconnect offer*/
    $scope.action_subscriber_disconnect_offer = function (OfferId) {
        if (confirm("Are you sure you want to disconnect subscriber offer?")) {
            $(".loading").show();
            RequestService.SubscriberDisconnectOffer($scope.msisdn, OfferId).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }


    };
    /*End Subscriber Disconnect offer*/

    /*Subscriber transfer*/
    $scope.action_subscriber_transfer = function () {
        OldAccountId = $("#old_account_id").val();
        NewAccountId = $("#new_account_id").val();
        Comment = $("#transfer_subscriber_comment").val();

        if (confirm("Are you sure you want to transfer subscriber?")) {
            $(".loading").show();
            RequestService.SubscriberTransfer($scope.msisdn, OldAccountId, NewAccountId, Comment).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }


    };

    /*Begin Subscriber CUG: getList, Set CUG, Delete CUG*/
    $scope.SubscriberGetCugList = function () {
        $(".loading").show();
        RequestService.SubscriberGetCugList().success(function (SubscriberGetCugList) {
            $(".loading").hide();
            $scope.SubscriberGetCugList = SubscriberGetCugList;

            var isCugActivated = $(".is-cug-assigned").text().length;
            if (isCugActivated < 5) {
                $("#lnk_remove_cug").hide();
                $(".cug-update_btn").removeClass("disabled");
            } else {
                $("#lnk_remove_cug").show();
                $(".cug-update_btn").addClass("disabled");
            }

        });
    };

    $scope.action_subscriber_add_cug = function () {
        NewCugId = $("#new_cug").val();
        if (confirm("Are you sure you want to add CUG?")) {
            $(".loading").show();
            RequestService.SubscriberAddCUG($scope.msisdn, NewCugId).success(function (response) {

                RequestService.SubscriberGetC1Info($scope.msisdn).success(function (data3) {
                    $(".loading").hide();
                    $scope.ret3 = data3;
                    $("#lnk_remove_cug").show();
                });

                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }
    };


    $scope.action_remove_cug = function (CugId) {
        if (confirm("Are you sure you want to remove CUG?")) {
            $(".loading").show();
            RequestService.SubscriberRemoveCug($scope.msisdn, CugId).success(function (response) {

                RequestService.SubscriberGetC1Info($scope.msisdn).success(function (data3) {
                    $(".loading").hide();
                    $scope.ret3 = data3;
                    $("#lnk_remove_cug").hide();
                    $(".cug-update_btn").removeClass("disabled");
                });

                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };

    /*End Subscriber CUG: getList, Set CUG, Delete CUG*/

    /*Begin campaign add/remove/modify*/
    $scope.action_subscriber_add_campaign = function () {
        OfferId = $("#ade_buttons a").attr("data-offer");
        CampaignId = $("#ade_buttons a").attr("data-campaignid");
        BundleId = $("#ade_buttons a").attr("data-bundleid");

        if (confirm("Are you sure you want to Activate Campaign?")) {
            $(".loading").show();
            RequestService.SubscriberActivateCampaign($scope.msisdn, CampaignId, BundleId).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };

    /*End ca,paign add/remove/modify*/

    /*Begin Account update CML, get nrc list*/
    $scope.AccountGetCMLNRCList = function () {
        RequestService.AccountGetCMLNRCList().success(function (AccountGetCMLNRCList) {
            $scope.AccountGetCMLNRCList = AccountGetCMLNRCList;
        });
    };

    /*End Account update CML, get nrc list*/

    /*Begin Account get assigned offers, get offers, set offer*/
    $scope.AccountGetAssignedOffers = function (AccountNo) {

        RequestService.AccountGetAssignedOffers(AccountNo).success(function (AccountGetAssignedOffers) {
            $scope.AccountGetAssignedOffers = AccountGetAssignedOffers;
        });
    };

    $scope.action_account_disconnect_offer = function (AccountNo, OfferId) {

        if (confirm("Are you sure you want to Disconnect Account Offer?")) {
            $(".loading").show();
            RequestService.AccountDisconnectOffer(AccountNo, OfferId).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });
        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };



    $scope.AccountCampaignList = function (SegmentGroupId, AccountNo) {

        if (!AccountNo) {
            AccountNo = $scope.ret3.accounNo;
        }
        
        RequestService.AccountCampaignList(SegmentGroupId, AccountNo).success(function (AccountCampaignList) {
            $scope.AccountCampaignList = AccountCampaignList;
            $scope.loadAccountcampaign_js();
        });
    };

    $scope.action_account_add_campaign = function (AccountNo) {
        OfferId = $("#ade_buttons_account a").attr("data-offeraccount");

        if (confirm("Are you sure you want to Activate Account Campaign?")) {
            $(".loading").show();
            RequestService.AccountActivateCampaign(AccountNo, OfferId).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });
        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    /*End Account get assigned offers, get offers, set offer*/

    /*Switch off sms content*/
    $scope.action_set_sms_content_off = function () {
        if (confirm("Are you sure you want to switch off sms content?")) {
            $(".loading").show();
            RequestService.SubscriberSetSmsContentOff($scope.msisdn).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });
        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    /*Swap subscriber bulk sms state*/
    $scope.action_subscriber_swap_bulk_sms_state = function () {
        if (confirm("Are you sure you want to swap bulk sms state?")) {
            $(".loading").show();
            RequestService.SubscriberSwapBulkSmsState($scope.msisdn).success(function (response) {
                alert(response.replace(/\"/g, ""));
                RequestService.SubscriberGetC1Info($scope.msisdn).success(function (data3) {
                    $(".loading").hide();
                    $scope.ret3 = data3;
                    $("#lnk_remove_cug").hide();
                    $(".cug-update_btn").removeClass("disabled");
                });
            });
        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    /*Swap subscriber bulk sms state*/
    $scope.action_subscriber_send_sms_survey = function () {
        if (confirm("Are you sure you want to send sms survey?")) {
            $(".loading").show();
            RequestService.SubscriberSetSmsSurvey($scope.msisdn).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });
        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    /*Begin Account change owner subscriber: get pasport, set passport, change passport*/
    $scope.action_findFLN_by_passport = function () {
        $(".loading").show();
        account_passport_sn = $("#account_passport_sn").val();
        account_passport_no = $("#account_passport_no").val();
        account_document_no = $("#account_document_no").val();
        search_type_for_assign_passport = $("#search_type_for_assign_passport").val();

        //alert(account_passport_sn + " - " + account_passport_no + " - " + account_document_no + " - " + search_type_for_assign_passport);

        RequestService.SubscriberGetFLNByPassport(search_type_for_assign_passport, account_passport_sn, account_passport_no, account_document_no).success(function (SubscriberGetFLNByPassport) {
            $(".account_owner_msisdn_btn").removeClass("disabled");
            $scope.SubscriberGetFLNByPassport = SubscriberGetFLNByPassport;
            $(".loading").hide();
        });
    };

    $scope.action_account_set_owner_msisdn = function () {
        if (confirm("Are you sure you want to set owner to Account?")) {
            $(".loading").show();

            IsSplitBalance = $("#account_passport_assigment_type").val();
            PersonalId = $("#subscriber_new_personal_id").val();

            RequestService.AccountSetOwnerMsisdn($scope.msisdn, PersonalId, IsSplitBalance).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.action_account_set_off_owner_msisdn = function () {
        if (confirm("Are you sure you want to remove passport from msisdn?")) {
            $(".loading").show();

            RequestService.AccountSetOffOwnerMsisdn($scope.msisdn).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.action_change_account_owner_passport = function () {
        if (confirm("Are you sure you want to update owner passport data?")) {
            $(".loading").show();
            RequestService.AccountUpdateOwnerPassportData($scope.ret6).success(function (response) {

                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });
        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    /*End Account change owner subscriber: get pasport, set passport, change passport*/










    /*Additional actions*/
    $scope.loadCampaignList = function () {
        $(".btn-offer-0").text("no");
        $(".btn-offer-1").text("yes");
        $(".btn-offer-").text("no");

        $(".sm-offers tr.enabled").click(function () {
            var ofId = $(this).find(".offer-id-class").text();
            var CampaignId = $(this).find(".offer-campaignid-class").text();
            var BundleId = $(this).find(".offer-bundleid-class").text();

            $("#ade_buttons a").attr("data-offer", ofId);
            $("#ade_buttons a").attr("data-campaignid", CampaignId);
            $("#ade_buttons a").attr("data-bundleid", BundleId);

            $(".sm-offers tr").removeClass("focus");
            $(this).addClass("focus");

            $("#ade_buttons a").removeClass("disabled");

            var isactivated = $(this).find(".state-isactivated").text();
            var soexclusion = $(this).find(".state-soexclusion").text();
            var poexclusion = $(this).find(".state-poexclusion").text();
            var nebalance = $(this).find(".state-nebalance").text();



            if (isactivated == "yes" || soexclusion == "yes" || poexclusion == "yes" || nebalance == "yes") {
                alert("You cannot activate this offer!");
                $("#ade_buttons a").addClass("disabled");
            } else {
                $("#ade_buttons a").removeClass("disabled");
            }


        });

    }

    $scope.loadAccountcampaign_js = function (oId) {
        $(".sm-offersaccount tr").removeClass("focus");
        $("#oId_" + oId).parent("tr").addClass("focus");
        $("#ade_buttons_account a").attr("data-offeraccount", oId);
    };

    $scope.loadEdList = function () {

        $(".class-ed-value-false-BooleanValue").html("<a href=\"#\"><img src=\"/Content/img/switch_off.gif\" height=\"20px\"></a>");
        $(".class-ed-value-true-BooleanValue").html("<a href=\"#\"><img src=\"/Content/img/switch_on.gif\" height=\"20px\"></a>");
        $(".class-ed-value-False-BooleanValue").html("<a href=\"#\"><img src=\"/Content/img/switch_off.gif\" height=\"20px\"></a>");
        $(".class-ed-value-True-BooleanValue").html("<a href=\"#\"><img src=\"/Content/img/switch_on.gif\" height=\"20px\"></a>");
        $(".class-ed-value-True-BooleanValue").html("<a href=\"#\"><img src=\"/Content/img/switch_on.gif\" height=\"20px\"></a>");
        //$(".class-ed-value-true-").text("");
        $(".class-ed-value-Reset-BooleanValue").html("<a href=\"#\">Reset</a>");



        $(".ed-list tr.enabled").click(function () {
            var EdName = $(this).find(".ed-name-class").text();
            var EdValue = $(this).find(".ed-value-class").text();
            var EdType = $(this).find(".ed-type-class").text();
            var showinput = false; // Вадим. Добавил индикатр вывода сообщения о смене сервиса. не нужно спрашивать, если не меняем состояние
            //alert(EdName + ' - ' + EdValue + ' - ' + EdType);

            if (EdType == "BooleanValue") {

                if (EdValue == "True") {
                    EdValue = "false";
                } else if (EdValue == "False") {
                    EdValue = "true";
                }

                if (EdValue == "true") {
                    EdValue = "false";
                } else if (EdValue == "false") {
                    EdValue = "true";
                }
                EdType = "5";
                showinput = true;
            }

            if (EdName == "BARRING_PASSWORD") {
                EdValue = "0000";
                EdType = "2";
                showinput = true;
            }

            if (EdName == "DELETE_LOCATION") {
                EdValue = "true";
                EdType = "5";
                showinput = true;
            }

            if (showinput) {
                $(".loading").show();
                if (confirm("Are you sure you want to Change Extended Data " + EdName + " to " + EdValue)) {

                    RequestService.SubscriberUpdateED($scope.msisdn, EdName, EdType, EdValue).success(function (response) {

                        setTimeout(function () {
                            $(".loading").hide();
                            alert(response.replace(/\"/g, ""));
                        }, 2000);

                    });

                } else {
                    alert("You canceled this action");
                    $(".loading").hide();
                }
            }

        });

    };



    /*---------------------------------------------------- Mass Operations ---------------------------------------------------------------------*/

    $scope.loadMOActions = function () {
        /*Get State List*/
        RequestService.SubscriberGetStateList(0).success(function (loadMOStateList) {
            $scope.loadMOStateList = loadMOStateList;
        });

        RequestService.CampaignsGetListMO().success(function (CampaignsGetListMO) {
            $scope.CampaignsGetListMO = CampaignsGetListMO;
        });

        RequestService.ExtendedDataGetListMo().success(function (ExtendedDataGetListMo) {
            $scope.ExtendedDataGetListMo = ExtendedDataGetListMo;
        });

        //RequestService.SubscriberGetBalancesMo(14, 6, 1).success(function (SubscriberGetBalancesMo) {
        //    $scope.SubscriberGetBalancesMo = SubscriberGetBalancesMo;
        //});
        RequestService.SubscriberGetBalancesMo().success(function (SubscriberGetBalancesMo) {
            $scope.SubscriberGetBalancesMo = SubscriberGetBalancesMo;
        });

        $(".ed_field_select").hide();
        $(".ed_field_text").hide();

        RequestService.SubscriberGetCugList().success(function (SubscriberGetCugListMo) {
            $scope.SubscriberGetCugListMo = SubscriberGetCugListMo;
        });


    };
    /*
    $scope.set_update_balance_type_mo(type).success(function () {
        $("#balance_update_type_mo").val(type);
    });
    */

    $scope.action_mo_change_state = function () {
        if (confirm("Are you sure you want to update rating state to selected subscribers?")) {
            $(".loading").show();
            RatingState = $("#mo_new_state_id").val();
            //alert("State = " + RatingState + "  " + getMsisdnList());

            RequestService.SubscriberUpdateStateMO(getMsisdnList(), RatingState).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.action_mo_subscriber_transfer = function () {
        NewAccountId = $("#MOnewAccountNo").val();
        Comment = $("#MOTransferComment").val();
        OldAccountId = $("#MOoldAccountNo").val();

        if (confirm("Are you sure you want to transfer selected subscribers to " + NewAccountId + "?")) {

            RequestService.SubscriberTransferMO(getMsisdnList(), OldAccountId, NewAccountId, Comment).success(function (response) {
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
        }

    }

    $scope.action_get_ed_field = function () {
        EdName = $("#mo_ed_list").val();

        RequestService.ExtendedDataGetFieldMo(EdName).success(function (ExtendedDataGetFieldMo) {
            //alert(ExtendedDataGetFieldMo.EdValueType);
            if (ExtendedDataGetFieldMo.EdValueType == 2) {
                $(".ed_field_text").show();
                $(".ed_field_select").hide();
            } else if (ExtendedDataGetFieldMo.EdValueType == 1) {
                $(".ed_field_select").show();
                $(".ed_field_text").hide();
            } else {
                $(".ed_field_select").hide();
                $(".ed_field_text").hide();
            }
            $scope.ExtendedDataGetFieldMo = ExtendedDataGetFieldMo;
        });

    }

    $scope.action_mo_subscriber_update_ed = function () {
        EdType = $("#mo_ed_type").val();
        EdValueType = $("#mo_ed_value_type").val();

        if (EdValueType == 2) {
            EdValue = $("#ed_field_text").val();
        } else if (EdValueType == 1) {
            EdValue = $("#ed_field_select").val();
        }

        if (confirm("Are you sure you want to update ExtendedData on selected subscribers")) {
            //alert("New ED Value will be: " + EdValue + "; ED Value Type = " + EdValueType)
            RequestService.SubscriberUpdateExtendedDataMo(getMsisdnList(), EdName, EdType, EdValue, '34').success(function (response) {
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
        }

    }

    $scope.action_mo_subscriber_add_campaign = function () {
        CampaignIdBundle = $("#mo_offer_list").val();

        if (confirm("Are you sure you want to Add campaign on selected subscribers")) {

            RequestService.SubscriberCampaignControlMo(getMsisdnList(), CampaignIdBundle, '1').success(function (response) {
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
        }

    }

    $scope.action_mo_subscriber_remove_campaign = function () {
        CampaignIdBundle = $("#mo_offer_list").val();

        if (confirm("Are you sure you want to Remove campaign on selected subscribers")) {

            RequestService.SubscriberCampaignControlMo(getMsisdnList(), CampaignIdBundle, '2').success(function (response) {
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
        }

    }

    $scope.action_mo_subscriber_update_balance = function () {
        CampaignIdBundle = $("#mo_offer_list").val();

        BalanceId = $("#mo_balance_id").val();
        BalanceValue = $("#mo_balance_new_val").val();
        BalanceComment = $("#mo_balance_comment").val();
        BalanceExpDate = $("#balance_exp_date_mo").val();
        BalanceUpdType = $("#balance_update_type_mo").val();

        if (confirm("Are you sure you want to Update balance on selected subscribers")) {
            $(".loading").show();
            RequestService.SubscriberUpdateBalanceMo(getMsisdnList(), BalanceId, BalanceValue, BalanceComment, BalanceExpDate, BalanceUpdType).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.action_mo_split_balance = function () {

        PoId = $("#mo_split_balance_po").val();
        ShadowBalance = $("#mo_split_balance_shadow").val();
        UserId = '34';

        if (confirm("Are you sure you want to Split balance on selected subscribers")) {

            RequestService.SubscriberSplitBalanceMo(getMsisdnList(), PoId, ShadowBalance, UserId).success(function (response) {
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
        }

    }

    $scope.action_mo_add_cug = function () {
        MoCugId = $("#mo_new_cug").val();
        UserId = '34';

        if (confirm("Are you sure you want to Split balance on selected subscribers")) {

            RequestService.SubscriberAssignCugMo(getMsisdnList(), MoCugId, UserId).success(function (response) {
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
        }


    }


    /*Begin Beautifull Number, Multi Sim*/
    $scope.action_bn_assign_offer = function () {

        OfferId = $("#bn_offer_list").val();

        if (confirm("Are you sure you want to Assign Beautifull Number")) {
            $(".loading").show();
            RequestService.SubscriberSetBNPayment($scope.msisdn, OfferId).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.action_ms_assign_offer = function () {

        OfferId = $("#ms_offer_list").val();
        Iccid = $("#ms_iccid").val();

        if (confirm("Are you sure you want to Assign MultiSim")) {
            $(".loading").show();
            RequestService.SubscriberSetMSPayment($scope.msisdn, OfferId, Iccid).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }
    /*End Butyfull Number, Multi Sim*/


    /*Begin Sim Change*/
    $scope.action_simchange_get_imsi = function () {
        $(".loading").show();
        NewIccid = $("#new_iccid").val();

        if (NewIccid.length == 18) {
            RequestService.SubscriberGetImsiByIccid($scope.msisdn, NewIccid).success(function (SubscriberGetImsiByIccid) {
                $(".loading").hide();

                if (SubscriberGetImsiByIccid.NewImsi == "16") {
                    alert("Please put correct ICCID");
                    $("#btn_change_sim").addClass("disabled");
                } else {
                    $("#btn_change_sim").removeClass("disabled");
                }


                if (SubscriberGetImsiByIccid.IsDualSim == "1") {
                    alert("Pay your attantion that sim card is Dual and you should make selection of activation type");
                    $('#is_dual_sim_new_subscriber').removeAttr("disabled")
                }

                $scope.SubscriberGetImsiByIccid = SubscriberGetImsiByIccid;

                //PDF action
                $("#btn_change_sim_pdf").removeClass("disabled");

            });
        } else {
            alert("Please put correct ICCID");
            $(".loading").hide();
            $("#btn_change_sim").addClass("disabled");
        }


    }


    $scope.action_simchange = function () {

        Imsi = $("#new_imsi").val();
        Iccid = $("#new_iccid").val();
        Isfree = $("#is_change_sim_free").val();
        DualSimType = $("#is_dual_sim_new_subscriber").val();
        Reason = $("#sim_change_reason").val();
        ReasonTxt = $("#sim_change_comment").val();

        if (confirm("Are you sure you want to swap sim card")) {
            $(".loading").show();

            RequestService.SubscriberChangeImsi($scope.msisdn, Imsi, Iccid, Isfree, DualSimType, Reason, ReasonTxt).success(function (response) {
                $(".loading").hide();

                if (response.Result == "1") {
                    $("#btn_change_sim_pdf").removeClass("disabled");
                    $("#btn_change_sim").addClass("disabled");
                } else {
                    //$("#btn_change_sim_pdf").addClass("disabled");
                    //$("#btn_change_sim").addClass("disabled");
                }
                alert(response.Response);

                //$.fancybox.close();

                //$("#new_iccid").val('8999893');
                //$("#new_imsi").val('');
                $("#btn_change_sim").addClass("disabled");

            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    $scope.on_sim_change_reason = function () {
        Reason = $("#sim_change_reason").val();

        if (Reason == 9) {
            $scope.change_sim_comment_disable = 0;
        } else {
            $scope.change_sim_comment_disable = 1;
        }

    }


    $scope.sim_change_popap = function () {
        $("#btn_change_sim").addClass("disabled");
        //$("#btn_change_sim_pdf").addClass("disabled");
        $("#sim_change_comment").addClass("disabled");
    }

    /*End Sim Change*/

    /*Begin Account OTI*/
    $scope.action_account_oti_find = function (AccountNo) {
        applyDate = $("#account_oti_apply_date").val();
        $(".loading").show();
        RequestService.AccountGetOTI(AccountNo, applyDate).success(function (AccountGetOTI) {
            $scope.AccountGetOTI = AccountGetOTI;
            $(".loading").hide();
            $("#ade_buttons_account a").removeClass("disabled");
        });

    }

    $scope.action_account_oti_apply = function (AccountNo) {
        applyDate = $("#account_oti_apply_date").val();

        if (confirm("Are you sure you want to apply OTI")) {
            $(".loading").show();

            RequestService.AccountSetOTI(AccountNo, applyDate, getOtiList()).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }
    }
    /*End Account OTI*/

    $scope.action_subscriber_update_balance_tml = function (AccountNo, OldTmlValue) {
        NewTmlValue = $("#new_tml_value").val();
        Comment = $("#tml_balance_update_comment").val();

        if (confirm("Are you sure you want to update TML")) {
            $(".loading").show();

            RequestService.AccountSetTMP(AccountNo, OldTmlValue, NewTmlValue, Comment).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }


    }

    $scope.action_subscriber_set_reregistration = function () {

        if (confirm("Are you sure you want to update Reregistration state")) {
            $(".loading").show();

            var curState = $scope.ReregistrationState;


            RequestService.SubscriberSetReregistrationState($scope.CoinMsisdnId, $scope.ReregistrationState).success(function (response) {
                if (curState == 0) {
                    $scope.ReregistrationState = 1;
                    $(".class-reregistration-button").html('').html("<img src=\"/Content/img/switch_off.gif\" height=\"20px\">");
                }
                else {
                    $scope.ReregistrationState = 0;
                    $(".class-reregistration-button").html('').html("<img src=\"/Content/img/switch_on.gif\" height=\"20px\">");
                }
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
                // $(".class-reregistration-button").html("<img src=\"/Content/img/switch_off.gif\" height=\"20px\">");


            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    /*Begin create Account SNRC*/
    $scope.action_load_snrc_list = function () {
        RequestService.AccountGetSNRCList().success(function (AccountGetSNRCList) {
            $scope.AccountGetSNRCList = AccountGetSNRCList;
        });
    }

    $scope.action_snrc_load_annotation = function (AccountNo) {
        AnnotationStartDate = $("#snrc_annotation_start_date").val();
        AnnotationEndDate = $("#snrc_annotation_end_date").val();

        RequestService.AccountSNRCLoadAnnotation(AccountNo, AnnotationStartDate, AnnotationEndDate).success(function (AccountSNRCLoadAnnotation) {
            $scope.AccountSNRCLoadAnnotation = AccountSNRCLoadAnnotation;
        });

    }

    $scope.action_account_set_snrc = function () {
        NrcTermId = $("#account_snrc_termid").val();
        OverrideRate = $("#account_snrc_rate").val();
        Annotation = $("#account_snrc_annotation").val();
        Comment = $("#account_snrc_comment").val();
        AccountNo = $scope.ret5.AccountNo

        if (confirm("Are you sure you want to set SNRC to " + AccountNo)) {
            $(".loading").show();

            //alert(AccountNo + " " + NrcTermId + " " + OverrideRate + " " + Annotation + " " + Comment);
            RequestService.AccountSetSNRC(AccountNo, NrcTermId, OverrideRate, Annotation, Comment).success(function (response) {
                alert(response.replace(/\"/g, ""));
                $(".loading").hide();
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }
    /*End create Account SNRC*/

    /*Begin Change PO for SOHO*/
    $scope.action_check_po = function () {
        RequestService.PoGetParameter($scope.selectedPoforUpdate.PoId).success(function (response) {
            if (response == "\"1\"") {
                $("#soho_form").removeClass("hide");
            } else {
                $("#soho_form").addClass("hide");
            }
        });

    }

    $scope.action_soho_find_sohoid = function () {
        Ssn = $("#po_soho_ssn").val();

        RequestService.SohoFindOrganizationBySsn(Ssn).success(function (response) {
            $scope.soho_data = response;
        });

    }

    $scope.action_soho_add_msisdn_to_ssn = function () {
        Ssn = $("#po_soho_ssn").val();
        CompanyName = $("#po_soho_organization").val();
        SohoId = $("#po_soho_soho_id").val();

        if (confirm("Are you sure you want to assign SSN to Msisdn")) {
            $(".loading").show();

            RequestService.SohoAddSSNtoMsisdn($scope.msisdn, Ssn, CompanyName, SohoId).success(function (response) {
                alert(response.replace(/\"/g, ""));
                $(".loading").hide();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }
    }
    /*Begin Change PO for SOHO*/

    $scope.action_snrc_get_order_list = function () {
        snrc_order_start_date = $("#snrc_order_start_date").val();
        snrc_order_end_date = $("#snrc_order_end_date").val();
        snrc_order_state = $("#snrc_order_state").val();

        $(".loading").show();
        RequestService.AccountGetSnrcOrder(snrc_order_start_date, snrc_order_end_date, snrc_order_state).success(function (AccountGetSnrcOrder) {
            $(".loading").hide();
            $scope.AccountGetSnrcOrder = AccountGetSnrcOrder;
        });

    }

    $scope.action_snrc_order_reject = function () {

        if (confirm("Are you sure you want to reject selected orders")) {
            $(".loading").show();
            RequestService.AccountUpdateSnrcOrder(GetSnrcOrderList(), 2).success(function (response) {
                alert(response.replace(/\"/g, ""));
                $(".loading").hide();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.action_snrc_order_detele = function () {

        if (confirm("Are you sure you want to delete selected orders")) {
            $(".loading").show();
            RequestService.AccountUpdateSnrcOrder(GetSnrcOrderList(), 3).success(function (response) {
                alert(response.replace(/\"/g, ""));
                $(".loading").hide();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.action_snrc_order_accept = function () {

        if (confirm("Are you sure you want to accept selected orders")) {
            $(".loading").show();
            RequestService.AccountUpdateSnrcOrder(GetSnrcOrderList(), 1).success(function (response) {
                alert(response.replace(/\"/g, ""));
                $(".loading").hide();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    $scope.getMsisdnShortInfo = function (msisdn) {

        $(".loading").show();
        RequestService.SubscriberGetShortC1Info(msisdn).success(function (response) {
            $(".loading").hide();

            $(".class-msisdn-short-info-" + msisdn).html("<a href=\"#\">Balance: " + response.AvailableBalance + "$<br>PO: " + response.PrimaryOffer + "<br>State: " + response.State + "</a>");

        });
    }

    $scope.SubscriberDocSimChange = function () {
        NewIccid = $("#new_iccid").val();
        OldIccid = $("#old_iccid").val();
        Msisdn = $scope.msisdn;
        //AgreementNum = $("#AgreementNumber").val();
        //SaleDate = $("#SaleDate").val();


        AgreementNum = $scope.ret.AgreementNumber;
        SaleDate = $scope.ret.MsisdnSaleDate;
        ClientFio = $("#ClientFio").val();

        window.open('/SubscribersManagment/SubscribersManagment/SubscriberDocSimChange/?Msisdn=' + Msisdn + '&AgreementNum=' + AgreementNum + '&OldIccid=' + OldIccid + '&NewIccid=' + NewIccid + '&SaleDate=' + SaleDate + "&ClientFio=" + ClientFio);
    }

    $scope.SubscriberDocSimDual = function () {
        Msisdn = $scope.msisdn;
        window.open('/SubscribersManagment/SubscribersManagment/SubscriberDocSimDual/?Msisdn=' + Msisdn);
    }

    $scope.SubscriberDocSpareSim = function (SpareSimCode) {
        //window.open('/SubscribersManagment/SubscribersManagment/SubscriberDocSpareSim/?SpareSimCode=' + SpareSimCode);

        RequestService.isActionAllowJS(52, 11, 61).success(function (res) {

            if (res == "1") {
                window.open('/SubscribersManagment/SubscribersManagment/SubscriberDocSpareSim/?SpareSimCode=' + SpareSimCode);
            } else {
                alert("You dont have access!");
            }

        });


    }

    $scope.SubscriberDocSpareSimOrder = function () {
        Msisdn = $scope.msisdn;
        window.open('/SubscribersManagment/SubscribersManagment/SubscriberDocSpareSimOrder/?Msisdn=' + Msisdn);
    }

    $scope.AccountGetSubscribersForRefund = function (AccountNo) {
        $(".loading").show();
        RequestService.AccountGetSubscribersForRefund(AccountNo).success(function (AccountGetSubscribersForRefund) {
            $(".loading").hide();
            $scope.AccountGetSubscribersForRefund = AccountGetSubscribersForRefund;
        });
    };

    $scope.SubscriberInquiryRefundDoc = function () {
        Msisdn = $scope.selectedSubsForPdf3.Msisdn
        window.open('/SubscribersManagment/SubscribersManagment/SubscriberInquiryRefundDoc/?Msisdn=' + Msisdn);
    }

    $scope.SubscriberInquiryRefundDoc1 = function (TermId) {
        //Msisdn = $scope.selectedSubsForPdf3.Msisdn
        window.open('/SubscribersManagment/SubscribersManagment/SubscriberInquiryRefundDoc1/?TermId=' + TermId);
    }

    $scope.AccountGetSupplimentaryAgreement = function (AccountNo) {
        window.open('/SubscribersManagment/SubscribersManagment/AccountGetSupplimentaryAgreement/?AccountNo=' + AccountNo);
    }

    $scope.AccountGetManagers = function (AccountNo) {
        RequestService.AccountGetManagers(AccountNo).success(function (AccountGetManagers) {
            $("#manager_list").show();
            $scope.AccountManagersList = AccountGetManagers;
        });
    };

    $scope.UnbindMsisdn = function () {
        Msisdn = $scope.msisdn;
        ClientId = $scope.ret.ClientId;

        if (Msisdn.length != 12) {
            Msisdn = $("#subscriber_id").val();
        }

        if (ClientId != null) {
            if (confirm("Are you sure you want to unbind passport from " + Msisdn)) {
                $(".loading").show();

                RequestService.SubscriberUnbindPassport(Msisdn).success(function (SubscriberUnbindPassport) {
                    $(".loading").hide();
                    $("#msisdn_bind_unbind").text('Bind');

                    alert(SubscriberUnbindPassport);

                    RequestService.SubscriberGetPassportDataByMSISDN(Msisdn).success(function (data) {
                        //console.log(data);
                        $scope.ret = data;
                    });

                });

            } else {
                alert("You canceled this action");
                $(".loading").hide();
            }
        } else {
            $(".p_document_type").val(0);
            $.fancybox({ 'href': '#popup_bind_msisdn' });

            $scope.availableLoadDocTypes1 = [
              { name: 'Паспорт РУз', value: '0' },
              { name: 'Не гражданин РУз', value: '1' },
              { name: 'А-я карточка', value: '2' },
              { name: 'Военный билет', value: '3' },
              { name: 'Вид на жительство', value: '4' },
              { name: 'Уд-е офицера', value: '5' },
              { name: 'Уд-е лица без гр-ва', value: '6' }
            ];
            $scope.AvailableDocTypeList1 = { selectedOption: $scope.availableLoadDocTypes1[0].value };


        }

    };

    $scope.BindMsisdn = function (ClientIdn) {
        Msisdn = $scope.msisdn;
        if (confirm("Are you sure you want to bind passport to " + ClientIdn)) {
            $(".loading").show();

            SubscriberId = $("#subscriber_id").val();
            //ClientId = $(".NewClientId").val();

            //alert(SubscriberId + " - " + Msisdn + " - " + ClientId);

            if (Msisdn.length != 12) {

                RequestService.SubscriberBindPassport1(Msisdn, SubscriberId, ClientIdn).success(function (SubscriberBindPassport) {
                    $(".loading").hide();
                    alert(SubscriberBindPassport);
                    $("#msisdn_bind_unbind").text("Unbind");
                    $.fancybox.close();

                    RequestService.SubscriberGetPassportDataByMSISDN(SubscriberId).success(function (data) {
                        //console.log(data);
                        $scope.ret = data;
                    });


                });

            } else {

                RequestService.SubscriberBindPassport(Msisdn, ClientIdn).success(function (SubscriberBindPassport) {
                    $(".loading").hide();
                    alert(SubscriberBindPassport);
                    $("#msisdn_bind_unbind").text("Unbind");
                    $.fancybox.close();

                    RequestService.SubscriberGetPassportDataByMSISDN(Msisdn).success(function (data) {
                        console.log(data);
                        $scope.ret = data;
                    });

                });

            }


        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    $scope.SubscriberSetDocsState = function () {
        Msisdn = $scope.msisdn;
        MsgText = $("#subscriber_comment_ads").val();

        if (Msisdn.length != 12) {
            Msisdn = $("#subscriber_id").val();
        }

        SubscriberId = $scope.SubscriberId;

        if ($("#passport_in_stock").is(":checked")) { PassportPresent = 1; } else { PassportPresent = "0"; }
        if ($("#agreement_in_stock").is(":checked")) { AgreementPresent = 1; } else { AgreementPresent = "0"; }
        if ($("#passport_correct").is(":checked")) { PassportCorrect = 1; } else { PassportCorrect = "0"; }
        if ($("#agreement_correct").is(":checked")) { AgreementCorrect = 1; } else { AgreementCorrect = "0"; }

        //alert(SubscriberId + " - " + Msisdn);

        if (confirm("Are you sure you want to update document states on " + Msisdn)) {
            $(".loading").show();

            if (SubscriberId.length > 0) {
                RequestService.SubscriberSetDocsState1(SubscriberId, Msisdn, PassportPresent, AgreementPresent, PassportCorrect, AgreementCorrect, MsgText).success(function (SubscriberSetDocsState) {
                    $(".loading").hide();
                    alert(SubscriberSetDocsState.replace(/\"/g, ""));
                });
            } else {
                RequestService.SubscriberSetDocsState(Msisdn, SubscriberId, PassportPresent, AgreementPresent, PassportCorrect, AgreementCorrect, MsgText).success(function (SubscriberSetDocsState) {
                    $(".loading").hide();
                    alert(SubscriberSetDocsState.replace(/\"/g, ""));
                });
            }
            $.fancybox.close();


        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };
    $scope.CancelFindInBind = function () {
        $scope.ClientFindByPassport = {};
        $scope.ClientFindByPassport = [];
        $scope.NewClietnId = {};
        $(".btn_search").removeClass("disabled");
        $(".btn_cancel").addClass("disabled");
        $(".is-client-found").html("");
    };


    //pereimenovala - nazvaniye funkcii doljno otlichat'sya ot nazvaniya peremennih
    $scope.ClientFindByPassportFn = function () {
        $(".loading").show();

        //DocumentType = $(".p_document_type").val();
        DocumentType = $scope.AvailableDocTypeList1.selectedOption;
        PassportSeries = $(".p_passport_series").val().toUpperCase();
        PassportNumber = $(".p_passport_number").val();
        Resident = 0;

        $(".btn_cancel").removeClass("disabled");
        $(".btn_search").addClass("disabled");
        if (PassportNumber != null && PassportSeries != null) {

            if (DocumentType == "0") {
                RequestService.ClientFindByPassport(PassportSeries, PassportNumber, Resident).success(function (ClientFindByPassport) {
                    $(".loading").hide();

                    if (ClientFindByPassport.Result == 0) {
                        alert("Клиент не найден!");
                        $(".is-client-found").html("Клиент не найден");
                    } else {
                        $(".btn_bind_msisdn").removeClass("disabled");
                        $(".is-client-found").html("Клиент найден");
                    }


                    if (ClientFindByPassport.ClientDataList.length > 0) {

                        if (ClientFindByPassport.ClientDataList[0].Gender == "0") {
                            $(".optionsRadios1").prop("checked", true);
                            $(".optionsRadios2").prop("checked", false);
                        } else {
                            $(".optionsRadios1").prop("checked", false);
                            $(".optionsRadios2").prop("checked", true);
                        }


                        $scope.ClientFindByPassport = ClientFindByPassport.ClientDataList[0];
                        $scope.NewClietnId = ClientFindByPassport.ClientDataList[0].ClientId;

                        //alert("$scope.NewClietnId " + $scope.NewClietnId);


                    }
                });

                //} else if (DocumentType == "1") {
            } else {

                RequestService.ClientFindByDocumentNumber(PassportNumber, DocumentType).success(function (ClientFindByPassport) {
                    $(".loading").hide();

                    if (ClientFindByPassport.Result == 0) {
                        alert("Клиент не найден!");
                        $(".is-client-found").html("Клиент не найден");
                    } else {
                        $(".btn_bind_msisdn").removeClass("disabled");
                        $(".is-client-found").html("Клиент найден");
                    }

                    //$(".btn_bind_msisdn").removeClass("disabled");

                    if (ClientFindByPassport.ClientDataList.length > 0) {

                        if (ClientFindByPassport.ClientDataList[0].Gender == "0") {
                            $("#optionsRadios1").prop("checked", true);
                            $("#optionsRadios2").prop("checked", false);
                        } else {
                            $("#optionsRadios1").prop("checked", false);
                            $("#optionsRadios2").prop("checked", true);
                        }

                        $scope.ClientFindByPassport = ClientFindByPassport.ClientDataList[0];
                        $scope.NewClietnId = ClientFindByPassport.ClientDataList[0].ClientId;
                    }

                });

            }
        }

    };


    $scope.SubscriberEditPassport = function () {
        
        Msisdn = $scope.msisdn;

        if (Msisdn.length != 12) {
            Msisdn = $(".subscriber_id").val();
        }

        ClientId = $scope.ret.ClientId;

        var LastName = $(".e_lastname").val();
        var FirstName = $(".e_firstname").val();
        var MiddleName = $(".e_middlename").val();
        var Gender = ""
        var Country = $(".e_country").val();
        var Province = $(".e_province").val();
        var City = $(".e_citydistrict").val();
        var Address = $(".e_address").val();
        var PassportPlace = $(".e_passportplace").val();
        var Birthdate = $(".e_birthdate").val();
        var HomePhone = $(".e_homephone").val();
        var Email = $(".e_email").val();
        var DocExpireDate = $(".e_validday").val();
        LastNameO = $scope.ret.LastName;
        FirstNameO = $scope.ret.FirstName;
        MiddleNameO = $scope.ret.MiddleName;
        GenderO = $scope.ret.Gender;
        CountryO = $scope.ret.Country;
        ProvinceO = $scope.ret.Province;
        CityO = $scope.ret.City;
        AddressO = $scope.ret.Address;
        PassportPlaceO = $scope.ret.PassportPlace;
        BirthdateO = $scope.ret.Birthdate;
        HomePhoneO = $scope.ret.HomePhone;
        EmailO = $scope.ret.Email;
        DocExpireDateO = $scope.ret.PassportValidDate;
        var PassportDate = $(".e_passport_date").val();
        PassportDateO = $scope.ret.PassportDate;

        //var VisaType = $("#visa_typeselection").val();
        //var DateArrive = $("#visa_date").val();
        //var DateVisa = $("#visa_date").val();

        var VisaType = $scope.visa_typeselection;
        var DateVisa = $("#visa_date_arrive").val();
        var DateArrive = $("#visa_date_arrive").val();

        console.log("VisaType: " + VisaType);
        console.log("$scope.visa_date: " + DateVisa);

        if (confirm("Are you sure you want to edit passport data " + Msisdn + "(" + ClientId + ")")) {
            
            if ($scope.ret.Resident0 == 1) {
                
                var oneDay = 24 * 60 * 60 * 1000;
                var today = new Date();

                //1 - with visa, 2 - without visa
                if (VisaType == 1) {

                    var date_split = $(".datetimepicker5").val().split('.');

                    DateArrive = "";

                    var exp_date = new Date(date_split[2] + "/" + date_split[1] + "/" + date_split[0]);
                    var diffDays = Math.round(Math.abs((exp_date.getTime() - today.getTime()) / (oneDay)));

                    if (diffDays > 365) {
                        alert("Невозможно создать абонента - не верный срок действия визы.");
                        return;
                    }
                }
                else if (VisaType == 2) {
                    var date_split = $(".datetimepicker5").val().split('.');

                    DateVisa = "";

                    var arr_date = new Date(date_split[2] + "/" + date_split[1] + "/" + date_split[0]);
                    var diffDays = Math.round(Math.abs((today.getTime() - arr_date.getTime()) / (oneDay)));


                    if (diffDays >= 90) {
                        alert("Невозможно создать абонента - оставшийся срок действия визы меньше 90 дней.");
                        return;
                    }
                }
            }

            $(".loading").show();



            RequestService.SubscriberEditPassport(Msisdn,
                                                    ClientId,
                                                    LastName,
                                                    FirstName,
                                                    MiddleName,
                                                    Gender,
                                                    $scope.ret.GenderV,
                                                    Country,
                                                    Province,
                                                    City,
                                                    Address,
                                                    PassportPlace,
                                                    Birthdate,
                                                    HomePhone,
                                                    Email,
                                                    DocExpireDate,
                                                    LastNameO,
                                                    FirstNameO,
                                                    MiddleNameO,
                                                    GenderO,
                                                    CountryO,
                                                    ProvinceO,
                                                    CityO,
                                                    AddressO,
                                                    PassportPlaceO,
                                                    BirthdateO,
                                                    HomePhoneO,
                                                    EmailO,
                                                    DocExpireDateO,
                                                    PassportDate,
                                                    PassportDateO,
                                                    VisaType,
                                                    DateArrive,
                                                    DateVisa).success(function (SubscriberEditPassport) {
                                                        $(".loading").hide();

                                                        $scope.ret.Email = Email;
                                                        $scope.ret.LastName = LastName;
                                                        $scope.ret.FirstName = FirstName;
                                                        $scope.ret.MiddleName = MiddleName;
                                                        $scope.ret.Country = Country;
                                                        $scope.ret.Province = Province;
                                                        $scope.ret.City = City;
                                                        $scope.ret.Address = Address;
                                                        $scope.ret.PassportPlace = PassportPlace;
                                                        $scope.ret.Birthdate = Birthdate;
                                                        $scope.ret.HomePhone = HomePhone;
                                                        $scope.ret.Email = Email;
                                                        $scope.ret.DocExpireDate = DocExpireDate;
                                                        $scope.ret.PassportDate = PassportDate;

                                                        alert(SubscriberEditPassport.replace(/\"/g, ""));
                                                    });


        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };


    $scope.action_save_number_swappo = function (ppackage) {
        $(".loading").show();
        Msisdn = $scope.msisdn;
        BundleId = $("#save_number_po_list").val();
        alert("Package = " + ppackage);

        if (ppackage == "1") {
            alert("SubscriberActivateCampaign");
            RequestService.SubscriberActivateCampaign(Msisdn, '146', BundleId).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        } else if (ppackage == "2") {
            alert("SubscriberDisconnectCampaign");
            RequestService.SubscriberDisconnectCampaign(Msisdn, '146', BundleId).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });

        }


    };

    $scope.action_subscriber_add_comment = function () {
        $(".loading").show();
        Msisdn = $scope.msisdn;
        Comment = $("#subscriber_comment").val();

        Msisdn = $scope.msisdn;
        if (Msisdn.length != 12) {
            Msisdn = $("#subscriber_id").val();
        }

        RequestService.SubscriberAddComment(Msisdn, Comment).success(function (response) {
            $(".loading").hide();
            alert(response.replace(/\"/g, ""));
            $.fancybox.close();
        });

    };

    $scope.subscriber_load_comments = function () {
        $(".loading").show();
        Msisdn = $scope.msisdn;

        Msisdn = $scope.msisdn;
        if (Msisdn.length != 12) {
            Msisdn = $("#subscriber_id").val();
        }

        RequestService.SubscriberLoadComments(Msisdn).success(function (response) {
            $(".loading").hide();
            $scope.SubscriberComments = response;
        });

    };

    $scope.subscriber_resetpc_passpord = function () {

        Msisdn = $scope.msisdn;

        if (confirm("Are you sure you want to reset Personal Cabinet password on " + Msisdn)) {
            $(".loading").show();

            RequestService.SubscriberPCPasswordReset(Msisdn).success(function (response) {
                alert("Message: " + response.Result + " \nErrorCode: " + response.Response);
                $(".loading").hide();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.AvayaSoControl = function () {
        Msisdn = $scope.msisdn;

        RequestService.SubscriberAvayaSoControl($scope.msisdn, '3').success(function (SubscriberAvayaSoControl) {
            sasc_result = SubscriberAvayaSoControl.replace(/\"/g, "");

            if (sasc_result == "0") {

                if (confirm("Are you sure you want to assign Avaya SO")) {
                    $(".loading").show();

                    RequestService.SubscriberAvayaSoControl($scope.msisdn, '1').success(function (SubscriberAvayaSoControl) {
                        sasc_result = SubscriberAvayaSoControl.replace(/\"/g, "");
                        alert(sasc_result);
                        $(".loading").hide();
                    });

                } else {
                    alert("You canceled this action");
                    $(".loading").hide();
                }

            } else {

                if (confirm("Are you sure you want to remove Avaya SO")) {
                    $(".loading").show();

                    RequestService.SubscriberAvayaSoControl($scope.msisdn, '2').success(function (SubscriberAvayaSoControl) {
                        sasc_result = SubscriberAvayaSoControl.replace(/\"/g, "");
                        alert(sasc_result);
                        $(".loading").hide();
                    });

                } else {
                    alert("You canceled this action");
                    $(".loading").hide();
                }

            }

        });

    }


    $scope.action_check_document_type = function () {
        DocumentType = $(".p_document_type").val();
        /*
        if (DocumentType == 1) {
            $("#p_passport_series").addClass("hide");
            $("#p_is_pasport").text("Document Id: ");
        } else {
            $("#p_passport_series").removeClass("hide");
            $("#p_is_pasport").text("Passport: ");
        }
        */
        if (DocumentType == 0) {
            $(".p_passport_series").removeClass("hide");
            $(".p_is_pasport").text("Passport: ");
        } else {
            $(".p_passport_series").addClass("hide");
            $(".p_is_pasport").text("Document Id: ");
        }

    }

    $scope.ChangePlatform = function () {
        Msisdn = $scope.msisdn;
        ChargeFlag = $("#changeplatform_who_pay").val();
        Ticket = $("#change_platfrom_ticket").val();
        IsChargeble = $("#changeplatform_ischargeble").val();
        IsCash = $("#changeplatform_refund_form").val();

        if (confirm("Are you sure you want to change platform?")) {
            $(".loading").show();

            RequestService.SubscriberChangePlatform($scope.msisdn, ChargeFlag, Ticket, IsChargeble, IsCash).success(function (SubscriberChangePlatform) {
                result = SubscriberChangePlatform.replace(/\"/g, "");
                alert(result);
                $(".loading").hide();
                $("#p_passport_series").addClass("disabled");
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.action_change_acnt_language = function (AccountId) {
        LandId = $("#new_acnt_language_id").val();

        if (confirm("Are you sure you want to change account Language?")) {
            $(".loading").show();

            RequestService.AccountUpdateLanguage(AccountId, LandId).success(function (response) {
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
                $(".loading").hide();
                $.fancybox.close();

            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.SubscriberDeactivateSplitBalance = function () {
        PaymentType = $("#sb_repayment_type").val();
        Msisdn = $scope.msisdn;

        if (confirm("Are you sure you want to deactivate Split Balance?")) {
            $(".loading").show();

            RequestService.SubscriberDeactivateSplitBalance(Msisdn, PaymentType).success(function (response) {
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
                $(".loading").hide();
                $.fancybox.close();

            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.AccountSetDeliveryGroup = function (AccounNo) {
        DeliveryGroup = $("#new_acnt_group_id").val();

        if (confirm("Are you sure you want to change Account delivery group?")) {
            $(".loading").show();

            RequestService.AccountSetDeliveryGroup(AccounNo, DeliveryGroup).success(function (response) {
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
                $(".loading").hide();
                $.fancybox.close();

            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    $scope.SubscriberRemoveSpareSim = function () {
        Msisdn = $scope.msisdn;

        if (confirm("Are you sure you want to deactivate SpareSim?")) {
            $(".loading").show();

            RequestService.SubscriberRemoveSpareSim(Msisdn).success(function (response) {
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
                $(".loading").hide();
                //$.fancybox.close();

            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.action_device_assign_offer = function () {
        Msisdn = $scope.msisdn;
        ChargeAmount = $("#device_offer_list").val();

        if (confirm("Are you sure you want to charge subscriber for device?")) {
            $(".loading").show();

            RequestService.SubscriberSetDevicePayment(Msisdn, ChargeAmount).success(function (response) {
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
                $(".loading").hide();
                //$.fancybox.close();

            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.LoadMsisdnAgreements = function () {
        $(".loading").show();

        RequestService.isActionAllowJS(55, 7, 1).success(function (res) {

            if (res == "1") {

                RequestService.SubscriberGetAgreements($scope.msisdn).success(function (data) {
                    $(".loading").hide();
                    $scope.msisdnAgreements = data.AgreementData1;
                });

            } else {
                $(".loading").hide();
                alert("You dont have access!");
            }

        });

    };

    $scope.GetAgrementFromBase = function () {
        Msisdn = $scope.msisdn;

        RequestService.isActionAllowJS(55, 7, 2).success(function (res) {

            if (res == "1") {

                window.open('/SubscribersManagment/SubscribersManagment/GetAgrementFromBase/?Msisdn=' + Msisdn);

            } else {
                $(".loading").hide();
                alert("You dont have access!");
            }

        });

    }

    $scope.SubscriberGetCallHistChargeList = function () {
        $(".loading").show();

        RequestService.SubscriberGetCallHistChargeList($scope.msisdn).success(function (data) {
            $(".loading").hide();
            $scope.SubscriberCallHistChargeList = data.SubscriberCallHistChargeList;
        });

    };

    $scope.SubscriberChargeCallHist = function () {
        RepId = $(".call-hist-charges-list option:selected").attr("id")

        if (confirm("Are you sure you want to charge subscriber for CallHistory?")) {
            $(".loading").show();

            RequestService.SubscriberChargeCallHist($scope.msisdn, RepId).success(function (response) {
                $(".loading").hide();
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
            });


        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    };

    $scope.action_findFLN_by_passport1 = function () {

        passport_s = $("#passport_s").val();
        passport_n = $("#passport_n").val();
        search_type_for_assign_passport = $("#search_type_for_assign_passport1").val();
        /*20160105
        if (search_type_for_assign_passport == "1") {
            RequestService.SubscriberGetFLNByPassport(search_type_for_assign_passport, passport_s, passport_n, '').success(function (SubscriberGetFLNByPassport) {
                $scope.SubscriberGetFLNByPassport = SubscriberGetFLNByPassport;
                $("#coin_transfer_btn_pdf_1").removeClass("disabled");
            });
        } else if (search_type_for_assign_passport == "2") {
            RequestService.SubscriberGetFLNByPassport(search_type_for_assign_passport, '', '', passport_n).success(function (SubscriberGetFLNByPassport) {
                $scope.SubscriberGetFLNByPassport = SubscriberGetFLNByPassport;
                $("#coin_transfer_btn_pdf_1").removeClass("disabled");
            });
        }
        */
        //alert(search_type_for_assign_passport + " - " + passport_s + " - " + passport_n);

        $(".loading").show();
        if (search_type_for_assign_passport == "0") {
            RequestService.SubscriberGetFLNByPassport(search_type_for_assign_passport, passport_s, passport_n, '').success(function (SubscriberGetFLNByPassport) {
                $scope.SubscriberGetFLNByPassport = SubscriberGetFLNByPassport;
                $("#coin_transfer_btn_pdf_1").removeClass("disabled");
                $(".loading").hide();
            });
        } else {
            RequestService.SubscriberGetFLNByPassport(search_type_for_assign_passport, '', '', passport_n).success(function (SubscriberGetFLNByPassport) {
                $scope.SubscriberGetFLNByPassport = SubscriberGetFLNByPassport;
                $("#coin_transfer_btn_pdf_1").removeClass("disabled");
                $(".loading").hide();
            });
        }

    };

    $scope.action_coin_transfer = function (type) {
        Msisdn = $scope.msisdn;

        if (type == 1) {
            $("#coin_transfer_btn_pdf_2").removeClass("disabled");
            //plus 1st print pdf

            OldOwner = $scope.ret.LastName + " " + $scope.ret.FirstName + " " + $scope.ret.MiddleName;
            NewOwner = $scope.SubscriberGetFLNByPassport.LastName + " " + $scope.SubscriberGetFLNByPassport.FirstName + " " + $scope.SubscriberGetFLNByPassport.MiddleName;
            SimIccid = $scope.ret4.Iccd;

            window.open('/SubscribersManagment/SubscribersManagment/ReregistrationApprovalPDF/?Msisdn=' + Msisdn + '&OldOwner=' + OldOwner + '&NewOwner=' + NewOwner + '&SimIccid=' + SimIccid);

        } else if (type == 2) {

            OldOwner = $scope.ret.LastName + " " + $scope.ret.FirstName + " " + $scope.ret.MiddleName;
            NewOwner = $scope.SubscriberGetFLNByPassport.LastName + " " + $scope.SubscriberGetFLNByPassport.FirstName + " " + $scope.SubscriberGetFLNByPassport.MiddleName;
            SimIccid = $scope.ret4.Iccd;

            window.open('/SubscribersManagment/SubscribersManagment/ReregistrationWishPDF/?Msisdn=' + Msisdn + '&OldOwner=' + OldOwner + '&NewOwner=' + NewOwner + '&SimIccid=' + SimIccid);

            $("#coin_transfer_btn_transfer").removeClass("disabled");

        }

    }

    $scope.action_subscriber_transfer_coin = function (type) {
        Msisdn = $scope.msisdn;
        NewClientId = $scope.SubscriberGetFLNByPassport.PersonalId;

        if (confirm("Are you sure you want to ReRegister msisdn " + Msisdn + " to " + NewClientId + "?")) {
            $(".loading").show();

            RequestService.SubscriberReRegistration(Msisdn, NewClientId).success(function (response) {
                $(".loading").hide();
                if (response.Result == "1") {
                    alert("Done!");
                    $.fancybox.close();
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }

            });


        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.SubscriberCoinTerminate = function (type) {
        Msisdn = $scope.msisdn;
        IsCash = $("#refund_form").val();

        if (confirm("Are you sure you want to Terminate msisdn " + Msisdn + "?")) {
            $(".loading").show();

            //RequestService.SubscriberCoinTerminate(Msisdn, IsCash).success(function (response) {
            RequestService.SubscriberCoinTerminate(Msisdn, "0").success(function (response) {
                $(".loading").hide();
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    $scope.showTerminatedPDF = function (data) {
        if (data > 0) {
            return 1;
        }
    }


    $scope.TerminatedSubscriberPdf = function (Msisdn) {
        Msisdn = $scope.msisdn;
        $scope.TerminatedSubscriberPdfbtn = 1;
        $(".loading").show();

        RequestService.getTerminationPDFClicks(Msisdn).success(function (response) {
            //console.log(Msisdn + " - " + response.Result);

            if (response.Result == "-1") {

                RequestService.isActionAllowJS(52, 11, 67).success(function (res) {

                    if (res == 1) {
                        window.open('/SubscribersManagment/SubscribersManagment/SubscriberInquiryRefundDoc/?Msisdn=' + Msisdn);
                        $(".loading").hide();
                    } else {
                        alert("Повторная печать заявки возможна только пользователям с действием: 'more then 1 click termination pdf print'");
                        $(".loading").hide();
                    }

                });

            } else {
                window.open('/SubscribersManagment/SubscribersManagment/SubscriberInquiryRefundDoc/?Msisdn=' + Msisdn);
                $(".loading").hide();
            }

        });

        //window.open('/SubscribersManagment/SubscribersManagment/SubscriberInquiryRefundDoc/?Msisdn=' + Msisdn);
    }


    $scope.getSoRcList = function (SoId) {

        RequestService.SoGetRcData(SoId).success(function (data) {
            $scope.SoGetRcData = data;
        });

    }

    $scope.SubscriberRechargeVoucher = function () {
        Msisdn = $scope.msisdn;
        secret_code = $("#voucher_recharge_code").val();

        if (confirm("Are you sure you want to recharge " + Msisdn + "?")) {
            $(".loading").show();

            RequestService.SubscriberVoucherRecharge(Msisdn, secret_code).success(function (response) {
                $(".loading").hide();
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    $scope.AddOfferAgreement = function () {
        Msisdn = $scope.msisdn;
        window.open('/SubscribersManagment/SubscribersManagment/AddOfferAgreement/?Msisdn=' + Msisdn);
    }

    $scope.SubscriberCallHistChargeOrder = function () {
        Msisdn = $scope.msisdn;
        //FromToDateString = $("#call_hist_charges_list").val();
        RepId = $(".call-hist-charges-list option:selected").attr("id");
        FromToDateString = $(".call-hist-charges-list option:selected").attr("value");

        window.open('/SubscribersManagment/SubscribersManagment/SubscriberCallHistChargeOrder/?Msisdn=' + Msisdn + "&FromToDateString=" + FromToDateString);
    }

    $scope.predicate = 'age';
    $scope.reverse = true;

    $scope.order = function (predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.SubscriberSplitBalanceAppendixDoc = function () {
        Msisdn = $scope.msisdn;
        window.open('/SubscribersManagment/SubscribersManagment/SubscriberSplitBalanceAppendixDoc/?Msisdn=' + Msisdn);
    }

    $scope.ProvinceListA = [
      { name: 'НАМАНГАНСКАЯ', value: 'НАМАНГАНСКАЯ' },
      { name: 'САМАРКАНДСКАЯ', value: 'САМАРКАНДСКАЯ' },
      { name: 'НАВОИЙСКАЯ', value: 'НАВОИЙСКАЯ' },
      { name: 'АНДИЖАНСКАЯ', value: 'АНДИЖАНСКАЯ' },
      { name: 'КАШКАДАРЬИНСКАЯ', value: 'КАШКАДАРЬИНСКАЯ' },
      { name: 'ХОРЕЗМСКАЯ', value: 'ХОРЕЗМСКАЯ' },
      { name: 'ДЖИЗАКСКАЯ', value: 'ДЖИЗАКСКАЯ' },
      { name: 'СУРХАНДАРЬИНСКАЯ', value: 'СУРХАНДАРЬИНСКАЯ' },
      { name: 'СЫРДАРЬИНСКАЯ', value: 'СЫРДАРЬИНСКАЯ' },
      { name: 'ТАШКЕНТСКАЯ', value: 'ТАШКЕНТСКАЯ' },
      { name: 'БУХАРСКАЯ', value: 'БУХАРСКАЯ' },
      { name: 'ФЕРГАНСКАЯ', value: 'ФЕРГАНСКАЯ' },
      { name: 'КАРАКАЛПАКСТАН', value: 'КАРАКАЛПАКСТАН' }
    ];
    $scope.ProvinceListS = { selectedOption: $scope.ProvinceListA[0].value };


    function loadMainByMsisdn() {
        ClearAllScopeData();

        $scope.SubscriberGet3dPartyAccess($scope.msisdn);

        RequestService.UserChkAccessMsisdn($scope.msisdn).success(function (response) {

            if (response.Result == "1") {
                alert("По требованию абонента, доступ к его данным закрыт");
                ClearAllScopeData();
                $(".loading").hide();
                $("#search_result_detail").hide();
            } else {

                $scope.loadSubscriberRhtOrders();

                $scope.SubscriberGetPromisePaymentInfo();

                RequestService.SubscriberGetComments1($scope.msisdn).success(function (response) {
                    console.log("@@@");
                    console.log(response);
                    console.log("@@@");
                    if (response.Result == 1) {
                        $scope.MsisdnCommentExists = 1;
                        $scope.MsisdnCommentText = response.CommentList1[0].INS_DATE + ": " + response.CommentList1[0].COMMENT_;
                        $scope.isRhtOrderMsg = response.CommentList1[0].CTYPE;
                    }

                });

                RequestService.SubscriberGetPassportDataByMSISDN($scope.msisdn).success(function (data) {
                    //alert("@@@ " + $scope.msisdn);
                    $scope.ret = data;
                    
                    $scope.visa_typeselection = data.VisaType;
                    console.log("VisaType: " + $scope.visa_typeselection);

                    if ($scope.ret.SubscriberId == null || $scope.ret.SubscriberId == "") {
                        alert("Абонент не найден или терминирован в системе CoIn");
                    }

                    $scope.SubscriberId = $scope.ret.SubscriberId;

                    //Get spare sim card
                    RequestService.SubscriberGetSpareSim($scope.msisdn).success(function (SubscriberGetSpareSim) {
                        $scope.SpareSimCard = SubscriberGetSpareSim.SpareSimCard.replace(/\"/g, "");
                        $scope.SpareSimCardCode = SubscriberGetSpareSim.SpareSimCardCode.replace(/\"/g, "");
                        $scope.SpareSimCardState = SubscriberGetSpareSim.SpareSimCardState.replace(/\"/g, "");
                        $scope.SpareSimCardActDate = SubscriberGetSpareSim.SpareSimCardActDate.replace(/\"/g, "");

                        if ($scope.SpareSimCard == "No Spare Sim") {
                            $(".spare-sim").hide();
                        } else {
                            $(".spare-sim").show();
                        }

                    });


                    $("#search_result_detail").show();

                    RequestService.SubscriberGetC1Info($scope.msisdn).success(function (data3) {
                        $(".loading").hide();

                        $('.datetimepicker5').datetimepicker({ format: 'd.m.Y', scrollInput: false, validateOnBlur: false, mask: true, yearStart: 1900, yearEnd: 2100 });

                        $scope.ret3 = data3;

                        if (data3.PoId == null || data3.PoId == "") {
                            alert("Абонент не найден в билинге");
                        }

                        SubscriberGetAccumList($scope.ret3.SubscrNo);

                        if ($scope.ret3.IsPostPaid == "0") {

                            $("#account-1").removeClass("active");
                            $("#li_account_account").removeClass("active");
                            $("#sub_responsible_tab").addClass("active");
                            $("#p_personal_passport_information").addClass("active");

                            $("#li_account_account").hide();
                            $("#li_subscr-1").hide();
                            $("#sub_responsible_tab").show();

                            $("#changeplatform_who_pay").hide();
                            $("#changeplatform_who_pay1").hide();

                            $("#changeplatform_refund_form_t").show();
                            $("#changeplatform_refund_form").show();

                        } else {

                            $("#p_personal_passport_information").removeClass("active");
                            $("#p_personal_passport_information").addClass("disabled");
                            //$("#lnk_sub_responsible_tab").addClass("disabled");
                            //$("#sub_responsible_tab").removeClass("active");
                            //$("#sub_responsible_tab").addClass("disabled");

                            $("#li_account_account").addClass("active");
                            $("#li_account_account").removeClass("disabled");
                            $("#lnk_account_account").removeClass("disabled");
                            $("#account-1").addClass("active");

                            $("#li_account_account").show();
                            $("#li_subscr-1").show();
                            //$("#sub_responsible_tab").hide();

                            $("#changeplatform_who_pay").show();
                            $("#changeplatform_who_pay1").show();

                            $("#changeplatform_refund_form_t").hide();
                            $("#changeplatform_refund_form").hide();

                        }

                        RequestService.isActionAllowJS(52, 11, 63).success(function (res) {

                            if (res == "1") {
                                $("#changeplatform_ischargeble").show();
                                $("#changeplatform_ischargeble_t").show();
                            } else {
                                $("#changeplatform_ischargeble").hide();
                                $("#changeplatform_ischargeble_t").hide();
                            }

                        });

                        SubscriberGetAssignedOfferList($scope.msisdn);
                    });

                    SubscriberCampaignList($scope.msisdn);
                    SubscriberGetSimInfo($scope.msisdn);
                    AccountGetBillingInfo($scope.ret.AccountNo);

                    AccountGetOrganizationInfo($scope.ret.AccountNo);
                    AccountGetOwnerMsisdn($scope.msisdn);
                    SubscriberGetSubscribersByClientId($scope.ret.ClientId);
                    SubscriberBalances($scope.msisdn);
                    SubscriberGetPoRCOverride($scope.msisdn);
                    AccountGetBalances($scope.ret.AccountNo);

                    RequestService.SubscriberGetIMEIList($scope.msisdn).success(function (data) {
                        $scope.HuaweiImeiList = data;
                    });

                    RequestService.SubscriberGetIMEIList_1().success(function (data) {
                        $scope.HuaweiImeiList_1 = data;
                    });

                    RequestService.SubscriberGetIMEIList_cust2(1).success(function (data) {
                        $scope.SubscriberGetIMEIList_cust2_list = data;
                    });

                    RequestService.SubscriberSaveNumberGetPOList($scope.msisdn).success(function (SubscriberGetMsisdnPriceSN) {
                        //$scope.SubscriberGetMsisdnPriceSN = SubscriberGetMsisdnPriceSN;
                        $scope.SubscriberGetMsisdnPriceSN = SubscriberGetMsisdnPriceSN.SubscriberSaveNumberPoList;
                        $scope.SaveNumberPakage = SubscriberGetMsisdnPriceSN.SubscriberSaveNumberPoPackage;


                    });

                    RequestService.SubscriberGetLastBNCharge($scope.msisdn).success(function (SubscriberGetLastBNCharge) {
                        if (SubscriberGetLastBNCharge.Result.replace(/\"/g, "") == "0") {
                            RequestService.SubscriberGetMsisdnPriceBN($scope.msisdn, '1', 'BN').success(function (SubscriberGetMsisdnPriceBN) {
                                $("#btn_bn_assign").removeClass("disabled");
                                $("#bn_offer_list").removeClass("disabled");
                                $scope.SubscriberGetMsisdnPriceBN = SubscriberGetMsisdnPriceBN;
                            });
                        }
                        else {
                            $("#bn_charge_state").text(SubscriberGetLastBNCharge.Response);
                        }
                    });

                    RequestService.SubscriberGetLastMSCharge($scope.msisdn).success(function (SubscriberGetLastMSCharge) {
                        if (SubscriberGetLastMSCharge.replace(/\"/g, "") == "0") {

                            RequestService.SubscriberGetMsisdnPriceBN('-999', '1', 'MultiSim').success(function (SubscriberGetMsisdnPriceMS) {
                                $("#ms_offer_list").removeClass("disabled");
                                $("#btn_ms_assign").removeClass("disabled");
                                $scope.SubscriberGetMsisdnPriceMS = SubscriberGetMsisdnPriceMS;
                            });
                        }
                    });

                    RequestService.SubscriberGetLastDeviceCharge($scope.msisdn).success(function (SubscriberGetLastDeviceCharge) {

                        if (SubscriberGetLastDeviceCharge.Result == "0") {

                            RequestService.SubscriberGetMsisdnPriceBN(SubscriberGetLastDeviceCharge.DeviceId, '1', 'Device').success(function (SubscriberGetMsisdnPriceDevice) {
                                $("#device_offer_list").removeClass("disabled");
                                $("#btn_device_assign").removeClass("disabled");
                                $scope.SubscriberGetMsisdnPriceDevice = SubscriberGetMsisdnPriceDevice;
                            });

                        }
                        //alert(SubscriberGetLastDeviceCharge.Response);
                        $scope.LastDevicePayment = SubscriberGetLastDeviceCharge.Response;
                    });

                    /*Get Extended Data list*/
                    SubscriberGetED($scope.msisdn);

                    RequestService.SubscriberGetReregistrationState($scope.msisdn).success(function (SubscriberGetReregistrationState) {
                        $scope.CoinMsisdnId = SubscriberGetReregistrationState.MsisdnId;

                        if (SubscriberGetReregistrationState.Result == "\"1\"" || SubscriberGetReregistrationState.Result == 1 || SubscriberGetReregistrationState.Result == "1") {
                            $scope.ReregistrationState = "1";
                            $(".class-reregistration-button").html('').html("<img src=\"/Content/img/switch_off.gif\" height=\"20px\">");
                        } else {
                            $scope.ReregistrationState = "0";
                            $(".class-reregistration-button").html('').html("<img src=\"/Content/img/switch_on.gif\" height=\"20px\">");
                        }
                    });

                    /*GET Subscriber documents state*/
                    RequestService.SubscriberGetDocsState($scope.msisdn).success(function (SubscriberGetDocsState) {

                        if (SubscriberGetDocsState.PassportPresent == "1") {
                            $("#passport_in_stock").prop('checked', true);
                        } else {
                            $("#passport_in_stock").prop('checked', false);
                        }

                        if (SubscriberGetDocsState.PassportCorrect == "1") {
                            $("#passport_correct").prop('checked', true);
                        } else {
                            $("#passport_correct").prop('checked', false);
                        }

                        if (SubscriberGetDocsState.AgreementPresent == "1") {
                            $("#agreement_in_stock").prop('checked', true);
                        } else {
                            $("#agreement_in_stock").prop('checked', false);
                        }

                        if (SubscriberGetDocsState.AgreementCorrect == "1") {
                            $("#agreement_correct").prop('checked', true);
                        } else {
                            $("#agreement_correct").prop('checked', false);
                        }

                        if (data.ClientId != null) {
                            $("#msisdn_bind_unbind").text("Unbind");
                        } else {
                            $("#msisdn_bind_unbind").text("Bind");
                            $scope.ret.ClientId = "";
                        }

                    });

                });

                RequestService.SubscriberAvayaSoControl($scope.msisdn, '3').success(function (SubscriberAvayaSoControl) {
                    sasc_result = SubscriberAvayaSoControl.replace(/\"/g, "");

                    if (sasc_result == "0") {
                        $("#avayaso_button").text("Assign");
                        $("#avayaso_state").text("Not Assigned");
                    } else {
                        $("#avayaso_state").text("Assigned");
                        $("#avayaso_button").text("Remove");
                    }

                });


                //get call history charges
                RequestService.SubscriberGetCallHistChargeList($scope.msisdn).success(function (data) {
                    $scope.SubscriberCallHistChargeList = data.SubscriberCallHistChargeList;
                });

                RequestService.SubscriberGetDeviceInfo($scope.msisdn).success(function (SubscriberGetDeviceInfoOut) {
                    $scope.SubscriberGetDeviceInfoOut = SubscriberGetDeviceInfoOut;
                });

            }

        });



    }


    function ClearAllScopeData() {
        $scope.ret = {};
        $scope.ret = [];
        $scope.ret1 = {};
        $scope.ret1 = [];
        $scope.ret2 = {};
        $scope.ret2 = [];
        $scope.ret3 = {};
        $scope.ret3 = [];
        $scope.ret6 = {};
        $scope.ret6 = [];
        $scope.ret7 = {};
        $scope.ret7 = [];
        $scope.ret8 = {};
        $scope.ret8 = [];
        $scope.ret5 = {};
        $scope.ret5 = [];
        $scope.ret4 = {};
        $scope.ret4 = [];
        $scope.ClientFindByPassport = {};
        $scope.ClientFindByPassport = [];
        //$scope.msisdn = {};
        //$scope.msisdn = [];
        $scope.SubscriberId = {};
        $scope.SubscriberId = [];
        $scope.SubscriberGetBalances = {};
        $scope.SubscriberGetBalances = [];
        $scope.SubscriberGetED = {};
        $scope.SubscriberGetED = [];
        $scope.SubscriberGetMsisdnPriceDevice = {};
        $scope.SubscriberGetMsisdnPriceDevice = [];
        $scope.SubscriberGetMsisdnPriceMS = {};
        $scope.SubscriberGetMsisdnPriceMS = [];

    }

    $scope.LoadHandlerState = function () {
        alert("Эта функция пока не доступна. Используйте отчеты: 270-023 и 270-004, чтобы узнать о статусах выполненных операциях.");
    }

    $scope.SubscriberResetTFLPassword = function () {
        Msisdn = $scope.msisdn;

        if (confirm("Are you sure you want to reset Temporary Fraud Lock password on " + Msisdn + "?")) {
            $(".loading").show();

            RequestService.SubscriberSetTFLPassword(Msisdn).success(function (response) {
                $(".loading").hide();
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    $scope.SubscriberTemporaryFraudLock = function () {
        Msisdn = $scope.msisdn;
        Password = '';//$("#tfl_password").val();

        if (confirm("Are you sure you want to set Temporary Fraud Lock state to " + Msisdn + "?")) {
            $(".loading").show();

            RequestService.SubscriberTemporaryFraudLock(Msisdn, Password).success(function (response) {
                $(".loading").hide();
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }
    }



    $scope.SubscriberSetHuaweiIMEI = function () {

        if (confirm("Are you sure you want to set Huawei device to " + $scope.msisdn + "?")) {
            $(".loading").show();

            RequestService.SubscriberSetHuaweiIMEI($scope.msisdn, $scope.HuaweiImei.Imei, $scope.HuaweiImei.Id).success(function (response) {
                $(".loading").hide();
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.SubscriberCheckSpareSim = function () {
        $(".loading").show();

        RequestService.SubscriberCheckSpareSim($scope.msisdn).success(function (response) {
            $(".loading").hide();

            if (response.Result == -1) {
                alert("Данная услуга работает для абонентов системы Prepaid");
                $.fancybox.close();
            } else if (response.Result == -2) {
                alert("У абонента уже есть резервная SIM карта");
                $.fancybox.close();
            } else if (response.Result == -3) {
                alert("Номер не найден в билинговой системе");
                $.fancybox.close();
            } else if (response.Result == -4) {
                alert("Для подключения услуги номер должен быть в активном статусе");
                $.fancybox.close();
            } else if (response.Result == 1) {
                /*open windows*/

                RequestService.SubscriberGetSpareSimRanges().success(function (response) {
                    $scope.SimRangeArr = response.SimRangeArr;

                    //setTimeout(function () {

                    //    var myTable = $('#ICCIDLIST').dataTable(
                    //            {
                    //                "iDisplayLength": 5,
                    //                "order": [[0, "desc"]],
                    //            });

                    //    $("#ICCIDLIST").show();

                    //}, 1000);

                });

            } else {
                alert("Ошибка при проверке номера");
                $.fancybox.close();
            }

        });

    }

    $scope.loadIccidListbyRange = function () {
        $(".loading").show();
        RequestService.SubscriberGetSpareSimbyRange($scope.IccidRange).success(function (response) {
            $scope.ICCIDArr = response.SimRangeArr;
            $(".loading").hide();

            $("#ICCIDLIST").dataTable().fnDestroy();

            setTimeout(function () {

                var myTable = $('#ICCIDLIST').dataTable(
                        {
                            "iDisplayLength": 5,
                            "order": [[0, "desc"]],
                        });
                $("#ICCIDLIST").show();

            }, 700);

        });
    }



    $scope.setSpareSimICCID = function (ICCID) {
        if (confirm("Are you sure you want to set Spare Sim " + $scope.msisdn + "?")) {
            $(".loading").show();

            RequestService.SubscriberSetSpareSim($scope.msisdn, ICCID).success(function (response) {
                $(".loading").hide();
                if (response.Result == "1") {
                    alert("Запасная сим-карта успешно активирована");
                } else if (response.Result == "-1") {
                    alert("Не возможно получить данные в системе COIN");
                } else if (response.Result == "-2") {
                    alert("Ошибка получения секретного кода");
                } else if (response.Result == "-3") {
                    alert("Ошибка активации секретного кода");
                } else if (response.Result == "-4") {
                    alert("Ошибка изменеия статуса секретного кода");
                } else if (response.Result == "-5") {
                    alert("Ошибка создания запасной сим-карты");
                } else if (response.Result == "-6") {
                    alert("У Вас нету доступа");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
                $.fancybox.close();
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    $scope.UnbindBindSearchPassport = function () {
        $(".loading").show();

        $scope.unbindbind.result = "";
        $scope.unbindbind.fio = "";

        //RequestService.ClientFindByPassport($scope.unbindbind.series, $scope.unbindbind.number, 0).success(function (ClientFindByPassport) {

        //    if (ClientFindByPassport.Result == 0) {

        //        $scope.unbindbind.result = "Клиент не найден!";
        //        $("#btn_rebind_msisdn").addClass("disabled");
        //        $scope.unbindbind.fio = "";

        //    } else {

        //        $scope.unbindbind.result = "Клиент найден:";
        //        $("#btn_rebind_msisdn").removeClass("disabled");
        //        $scope.unbindbind.client_id = ClientFindByPassport.ClientDataList[0].ClientId;
        //        $scope.unbindbind.fio = ClientFindByPassport.ClientDataList[0].LastName + " " + ClientFindByPassport.ClientDataList[0].FirstName + " " + ClientFindByPassport.ClientDataList[0].MiddleName;
        //    }

        //    $(".loading").hide();

        //});

        if ($scope.AvailableDocTypeList2.selectedOption == "0") {
            RequestService.ClientFindByPassport($scope.unbindbind.series, $scope.unbindbind.number, 0).success(function (ClientFindByPassport) {
                $(".loading").hide();

                if (ClientFindByPassport.Result == 0 || angular.isUndefined(ClientFindByPassport.ClientDataList[0].ClientId)) {

                    $scope.unbindbind.result = "Клиент не найден!";
                    $("#btn_rebind_msisdn").addClass("disabled");
                    $scope.unbindbind.fio = "";

                } else {

                    $scope.unbindbind.result = "Клиент найден:";
                    $("#btn_rebind_msisdn").removeClass("disabled");
                    $scope.unbindbind.client_id = ClientFindByPassport.ClientDataList[0].ClientId;
                    $scope.unbindbind.fio = ClientFindByPassport.ClientDataList[0].LastName + " " + ClientFindByPassport.ClientDataList[0].FirstName + " " + ClientFindByPassport.ClientDataList[0].MiddleName;
                }

            });

        } else {

            RequestService.ClientFindByDocumentNumber($scope.unbindbind.number, $scope.AvailableDocTypeList2.selectedOption).success(function (ClientFindByPassport) {
                $(".loading").hide();

                if (ClientFindByPassport.Result == 0 || angular.isUndefined(ClientFindByPassport.ClientDataList[0].ClientId)) {

                    $scope.unbindbind.result = "Клиент не найден!";
                    $("#btn_rebind_msisdn").addClass("disabled");
                    $scope.unbindbind.fio = "";

                } else {

                    $scope.unbindbind.result = "Клиент найден:";
                    $("#btn_rebind_msisdn").removeClass("disabled");
                    $scope.unbindbind.client_id = ClientFindByPassport.ClientDataList[0].ClientId;
                    $scope.unbindbind.fio = ClientFindByPassport.ClientDataList[0].LastName + " " + ClientFindByPassport.ClientDataList[0].FirstName + " " + ClientFindByPassport.ClientDataList[0].MiddleName;
                }

            });

        }


    }

    $scope.SubscriberUnbindBindMO = function () {
        if (confirm("Are you sure you want to unbind & bind selected subscribers?")) {
            $(".loading").show();

            RequestService.SubscriberUnbindBindMO(getMsisdnList(), $scope.unbindbind.client_id).success(function (response) {
                $(".loading").hide();
                alert(response.replace(/\"/g, ""));
            });


            var msisdn_for_comment_list = "";
            var checked_list = getMsisdnList();
            angular.forEach($scope.ret1, function (item1) {

                var t = (checked_list.match(item1.Msisdn) || []).length;

                if (t == "0" && item1.Msisdn != "") {

                    msisdn_for_comment_list = item1.Msisdn + ";" + msisdn_for_comment_list;

                }

            });


            RequestService.SubscriberAddRedCommentMO(msisdn_for_comment_list, $scope.cad.RedComment.ID).success(function (response) {
                $(".loading").hide();
            });


        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.LoadPassportTypes = function () {
        $("#passport_s_2").prop('disabled', false);
        $(".loading").show();

        $scope.availableLoadDocTypes2 = [
          { name: 'Паспорт РУз', value: '0' },
          { name: 'Не гражданин РУз', value: '1' },
          { name: 'А-я карточка', value: '2' },
          { name: 'Военный билет', value: '3' },
          { name: 'Вид на жительство', value: '4' },
          { name: 'Уд-е офицера', value: '5' },
          { name: 'Уд-е лица без гр-ва', value: '6' }
        ];
        $scope.AvailableDocTypeList2 = { selectedOption: $scope.availableLoadDocTypes2[0].value };

        RequestService.SubscriberGetLoadRedcomments().success(function (response) {
            $scope.RedCommentList = response.SubscribersRedComments;
            $(".loading").hide();
        });


    }

    $scope.onchangeDocType2 = function () {

        if ($scope.AvailableDocTypeList2.selectedOption == 0) {
            $("#passport_s_2").prop('disabled', false);
        } else {
            $("#passport_s_2").prop('disabled', true);
        }

    }

    $scope.RecreateSubscribers = function () {

        if (confirm("Вы действительно хотите пересоздать абонента с последующей продажей номера?")) {
            $(".loading").show();

            RequestService.SubscriberRecreate($scope.msisdn).success(function (response) {
                $(".loading").hide();
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }

            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    $scope.SubscriberMADVOff = function (param) {

        if (confirm("Вы действительно хотите отключить мобильную рекламу?")) {
            $(".loading").show();

            RequestService.SubscriberMADVOff($scope.msisdn).success(function (response) {
                $(".loading").hide();

                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }

            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }
    }



    $scope.SubscriberGetPromisePaymentInfo = function () {
        RequestService.SubscriberGetPromisePaymentInfo($scope.msisdn).success(function (response) {


            if (response.resultCode == -1) {
                $scope.PromisePaymentInfo = response.resultDescription;
            } else {
                $scope.PromisePaymentInfo = "";
                if (response.debtExists == 1) {
                    $scope.debtExists = "Y";
                    $scope.debtAmount = response.debtInfo.debtAmount;
                    $scope.debtDate = response.debtInfo.debtDate;
                    $scope.remDebtAmount = response.debtInfo.remDebtAmount;
                    $scope.serviceFee = response.debtInfo.serviceFee;
                    $scope.remServiceFee = response.debtInfo.remServiceFee;
                    $scope.debtTypeStr = response.debtInfo.debtTypeStr;

                } else {
                    $scope.debtExists = "N";
                    $scope.debtAmount = "";
                    $scope.debtDate = "";
                    $scope.remDebtAmount = "";
                    $scope.serviceFee = "";
                    $scope.remServiceFee = "";
                    $scope.debtTypeStr = "";
                }
            }

        });
    }

    $scope.SubscriberGet3dPartyAccess = function (Msisdn) {

        RequestService.SubscriberGet3dAccess(Msisdn).success(function (response) {

            //console.log("SubscriberGet3dAccess: " + response.replace(/\"/g, ""));

            if (response.replace(/\"/g, "") == "0") {
                $scope.daccess_info = "Allowed";
                $(".class-3dpartyaccess-button").html('').html("<img src=\"/Content/img/switch_on.gif\" height=\"20px\">");
                $scope.thirdPartyAcess = 0;
            } else {
                $scope.daccess_info = "Denied";
                $(".class-3dpartyaccess-button").html('').html("<img src=\"/Content/img/switch_off.gif\" height=\"20px\">");
                $scope.thirdPartyAcess = 1;
            }

        });

    }


    $scope.SubscriberSet3dAccess = function () {
        var newVal;
        if ($scope.thirdPartyAcess == 0) {
            newVal = 1;
        } else {
            newVal = 0;
        }

        if (confirm("Вы действительно хотите изменить доступ к данному номеру?")) {
            $(".loading").show();


            RequestService.SubscriberSet3dAccess($scope.msisdn, newVal).success(function (response) {
                alert(response.Response);
                $(".loading").hide();

                if (newVal == 1) {
                    $scope.daccess_info = "Denied";
                    $(".class-3dpartyaccess-button").html('').html("<img src=\"/Content/img/switch_off.gif\" height=\"20px\">");
                    $scope.thirdPartyAcess = 1;
                } else {
                    $scope.daccess_info = "Allowed";
                    $(".class-3dpartyaccess-button").html('').html("<img src=\"/Content/img/switch_on.gif\" height=\"20px\">");
                    $scope.thirdPartyAcess = 0;
                }

            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    $scope.SubscriberTransferFundsForm = function (MsisdnDst) {
        $scope.MsisdnSrc = $scope.msisdn;
        $scope.MsisdnDst = MsisdnDst;

        angular.forEach($scope.SubscriberGetBalances, function (balance) {

            if (balance.BalanceId == 1) {
                $scope.TransferSumm = balance.AvailableBalance
            }

        });

    }

    $scope.SubscriberTransferFunds = function () {

        if (confirm("Вы действительно хотите перевести с " + $scope.MsisdnSrc + " на " + $scope.MsisdnDst + " " + $scope.TransferSumm + "$ ?")) {
            $(".loading").show();

            console.log($scope.ret.PassportSeries + $scope.ret.PassportNumber);

            RequestService.SubscriberTransferFunds($scope.MsisdnSrc, $scope.MsisdnDst, 'null', 'COIN_MONEY_TRANS|' + $scope.ret.PassportSeries + $scope.ret.PassportNumber + '|').success(function (response) {
                alert(response.Response);
                $(".loading").hide();
                //$("#btn_transfer_funds").hide();
                $("#btn_transfer_funds").addClass("disabled");
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }

    $scope.SubscriberDocMoneyTransfer = function () {
        var msisdnSrc = $scope.MsisdnSrc;
        var msisdnDst = $scope.MsisdnDst;
        var transferSum = $scope.TransferSumm;
        window.open('/SubscribersManagment/SubscribersManagment/SubscriberDocMoneyTransfer/?msisdnSrc=' + msisdnSrc + '&msisdnDst=' + msisdnDst + '&transferSum=' + transferSum);
    }

    $scope.SubscriberRefundMoney = function (SubscriberId, Msisdn) {

        if (confirm("Вы действительно хотите сгенерировать справку для " + Msisdn)) {
            $(".loading").show();

            RequestService.SubscriberGenRefundPdf(SubscriberId, Msisdn).success(function (response) {
                $(".loading").hide();
                alert(response.Response);
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }
    }

    $scope.SubscriberReregBonus = function () {

        if (confirm("Вы действительно хотите дать бонус абоненту " + $scope.msisdn)) {
            $(".loading").show();

            RequestService.SubscriberReregBonus($scope.msisdn).success(function (response) {
                $(".loading").hide();
                alert(response.Response);
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }
    }

    $scope.SubscriberPaycomProfDeact = function () {
        if (confirm("Вы действительно хотите удалить профайл в Paycom абоненту " + $scope.msisdn)) {
            $(".loading").show();

            RequestService.SubscriberPaycomProfDeact($scope.msisdn).success(function (response) {
                $(".loading").hide();
                alert(response.Response);
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }
    }

    $scope.SubscriberBaseUpdate = function () {
        if (confirm("Сохранить данные на номере " + $scope.msisdn)) {
            $(".loading").show();

            RequestService.SubscriberBaseUpdate($scope.msisdn, $scope.baseupdate.lastname, $scope.baseupdate.firstname, $scope.baseupdate.middlename).success(function (response) {
                $(".loading").hide();
                alert(response.Response);

            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }
    }

    $scope.SubscriberSetIMEI = function () {

        if (confirm("Are you sure you want to set device (" + $scope.DeviceImei.Imei + ") to " + $scope.msisdn + "?")) {
            $(".loading").show();

            RequestService.SubscriberSetDeviceIMEI($scope.msisdn, $scope.DeviceImei.Imei, $scope.DeviceImei.Id, $scope.DeviceImei.MODEL_ID).success(function (response) {
                $(".loading").hide();
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }


    }

    $scope.SubscriberSetDeviceIMEI_cust1 = function () {

        if (confirm("Are you sure you want to set device (" + $scope.DeviceImei.Imei + ") to " + $scope.msisdn + "?")) {
            $(".loading").show();

            RequestService.SubscriberSetDeviceIMEI_cust1($scope.msisdn, $scope.DeviceImei.Imei, $scope.DeviceImei.Id, $scope.DeviceImei.MODEL_ID).success(function (response) {
                $(".loading").hide();
                if (response.Result == "1") {
                    alert("Done!");
                } else {
                    alert("Message: " + response.Response + " \nErrorCode: " + response.Result);
                }
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }


    }

    $scope.PrintWarranty = function () {

        //window.open('/DealerOnLine/GetWarranty/?deviceId=' + $scope.DeviceImei.MODEL_ID, "_blank");

        //window.open('/SubscribersManagment/SubscribersManagment/GetWarranty/?deviceId=' + $scope.DeviceImei.Id);
        window.open('/SubscribersManagment/SubscribersManagment/GetWarranty/?deviceId=' + $scope.SubscriberGetDeviceInfoOut.Id);
        
    };



    $scope.ChangePlatformPdf = function () {
        window.open('/SubscribersManagment/SubscribersManagment/ChangePlatformPdf/?Msisdn=' + $scope.msisdn);
    }



    $scope.SubscriberAssignZakazMb = function () {

        if (confirm("Вы действительно хотите купить " + $scope.zakaz_mb + " Mb абоненту " + $scope.msisdn)) {
            $(".loading").show();

            RequestService.SubscriberAssignZakazMb($scope.msisdn, $scope.zakaz_mb).success(function (response) {
                $(".loading").hide();
                alert(response.Response);
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }

    }


    $scope.AccountCallHistPay = function () {
        if (confirm("Вы действительно хотите снять деньги с " + $scope.numbers_amount + " абонентов аккаунта " + $scope.ret5.AccountNo + " за " + $scope.month_amount + " месяцев")) {
            $(".loading").show(); 

            RequestService.AccountCallHistPay($scope.ret5.AccountNo, $scope.numbers_amount, $scope.month_amount, $scope.AccountCallHistPayisFree).success(function (response) {
                $(".loading").hide();
                alert(response.Response);
            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }
    }


    $scope.AccountGetAgentList = function () {

        $(".loading").show();

        RequestService.AccountGetAgentList().success(function (response) {

            if (response.Result == "-1") {
                alert(response.Response);
            }

            $scope.AgentList = response.AccountAgentList;
            $(".loading").hide();
        });


    }


    $scope.AccountSetAgent = function (accountNo, agentId, clientId) {

        $(".loading").show();
        
        //alert("accountNo: " + accountNo + " agentId: " + agentId + " clientId: " + clientId);

        RequestService.AccountSetAgent(accountNo, agentId, clientId).success(function (response) {

            if (response.Result == "-1") {
                alert(response.Response);
            } else {
                alert("Данные сохраненны");
            }

            $.fancybox.close();

            $(".loading").hide();
        });


    }


    $scope.loadSubscriberRhtOrders = function()
    {
        $(".loading").show();
        
        RequestService.GetRhtOrderList($scope.msisdn).success(function (response) {

            $scope.SubscriberRhtOrders = response.BillingRhtOrders;

            if (response.Result == "0") {

                $scope.MsisdnCommentExists = 1;
                $scope.MsisdnCommentText = "У абонента есть зависшие ордера в билинге. Для получения информации нажмите Tarif Info->RHT Orders";
                $scope.isRhtOrderMsg = 1;
            }

            $(".loading").hide();
        });

    }

    $scope.loadSubscriberRhtOrderDetails = function (OrderId, OrderNumber) {
        $(".loading").show();

        RequestService.GetRhtOrderDetailList($scope.msisdn, OrderId, OrderNumber).success(function (response) {

            $scope.SubscriberRhtOrderDetails = response.BillingRhtOrderDetails;
        
            $("#popup_rht_orders").hide();
            //$("#popup_rht_order_details").show();
            $.fancybox.open({ href: "#popup_rht_order_details" });


            $(".loading").hide();
        });

    }

    $scope.popup_rht_order_details_close = function(){
        $("#popup_rht_order_details").hide();
        //$("#popup_rht_orders").show();
        $.fancybox.open({ href: "#popup_rht_orders" });
    }

    $scope.SubscriberRhtOrderCancel = function (OrderId, OrderNumber) {
        if (confirm("Вы действительно хотите отменить заказ")) {
            $(".loading").show();

            RequestService.SubscriberRhtOrderCancel($scope.msisdn, OrderId, OrderNumber).success(function (response) {
                $(".loading").hide();

                if (response.Result == "0") {
                    alert("Заказ успешно удален");
                } else {
                    alert("Ошибка отмены заказа " + response.Response);
                }

            });

        } else {
            alert("You canceled this action");
            $(".loading").hide();
        }
    }

    $scope.AccountGetBalances = function (accountId){
        
        RequestService.AccountGetBalances(accountId).success(function (data1) {
            $scope.AccountBalances = data1;
        });

    }


    $scope.userOpenTicket = function () {
        var type = $("#omu_ticket_type").val();
        var description = $("#omu_ticket_text").val();
        var Title = "test";
        
        var a = RequestService.CreateTicketPSO($scope.msisdn, Title, description).success(function (data) {
            //console.log(data)
            $scope.ticketUrl = data.url;
            $scope.ticketKey = data.key;
            alert("Тикет успешно открыт: " + $scope.ticketUrl);
        });
        
    }

    $scope.userOpenTicketOrder = function () {
        console.log("Start userOpenTicketOrder");

        var description = $("#omu_ticket_text_order").val();
        
        var order_text = "";
        angular.forEach($scope.SubscriberRhtOrders, function (item) {

            //order_text = order_text + "\n" + item.CREATEDT + " - " + " - " + item.CREATEWHO + itme.ORDERID;
            if (item.GENERATEWORKFLOW == 'true') {
                order_text = order_text + "\n" + item.ORDERID + "-" + item.CREATEDT + "-" + item.CREATEWHO;
            }
            
        });

        description = description + "\n\n Ордера:" + order_text;
        
        var a = RequestService.CreateTicketPSO($scope.msisdn, "Зависшие заказы", description).success(function (data) {
            $scope.ticketUrl = data.url;
            $scope.ticketKey = data.key;
            alert("Тикет успешно открыт: " + $scope.ticketUrl);
        });
    }


    $scope.repSignalRNotified = function (code, erMessage, data) {
        console.log(code);
        console.log(erMessage);
        console.log(data);
        if (code == 0) {
            if (data.groupId == 4 && data.dealId == 61 && data.actionId == 2) {
                RequestService.SubscriberChargeRepCallHist($scope.msisdn_field, data.id, data.startDate, data.endDate).success(function (data) {
                    console.log(data);
                }).error(function (errData) {
                    alert(errData);
                    console.log(errData);
                });
            }
        }
        else {
            alert(erMessage);
        }
    }




}).directive('datetimepicker', ['$parse', function ($parse) {
    return function (scope, element, attr) {
        element.datetimepicker({ format: 'Y.m.d' });
    }
}]);


