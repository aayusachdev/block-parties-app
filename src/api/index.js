/**
 * Method which makes a GET API call to the berlin.de endpoint. Fetches all the events.
 */
export default async function fetchEventsData() {

  try {
    const eventsResponse = await fetch('https://www.berlin.de/sen/web/service/maerkte-feste/wochen-troedelmaerkte/index.php/index/all.json?q=');
    const eventsData = await eventsResponse.json();
    return eventsData.index;
  } catch (err) {
    console.log(err);
  }
}