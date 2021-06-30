import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { Dispatch, useEffect } from "react";
import { FlatList } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { connect } from "react-redux";
import { getNotificationsRequestAction } from "../../../store/notification/actionCreators";
import {
  NOTIFICATIONS,
  NotificationsRequestAction,
} from "../../../store/notification/actionTypes";
import { StoreState } from "../../../store/root/reducer";
import ActivityIndicatorView from "../../../util/activityIndicator";
import { LIGHT_GRAY_BG } from "../../../util/colors";
import { ApiProps, Notifications } from "../../model";
import NotificationItem from "./notificationItem";

interface Props extends ApiProps {
  getNotificationsRequestAction: () => void;
  response: Notifications | null;
}

const Notification: React.FC<Props> = ({
  isLoading,
  error,
  getNotificationsRequestAction,
  response,
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    getNotificationsRequestAction();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT_GRAY_BG }}>
      <FlatList
        data={response?.notifications}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
        renderItem={({ item }) => (
          <NotificationItem
            imageUrl={item.photo}
            title={item.title}
            time={moment(item.time).format("DD MMM")}
            // address={item.description}
            address={"Profitez de voyages de luxe à des tarifs très abordables avec nos compagnies aériennes. Réservez maintenant pour obtenir le meilleur forfait disponible."}
          />
        )}
        keyExtractor={(index) => index.time + index.time + index.photo}
      />
      {isLoading ? <ActivityIndicatorView /> : null}
    </SafeAreaView>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    isLoading: state.isLoading[NOTIFICATIONS],
    error: state.error[NOTIFICATIONS],
    response: state.notificationsState.result,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<NotificationsRequestAction>) => {
  return {
    getNotificationsRequestAction: () => {
      dispatch(getNotificationsRequestAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
