# this file is able to connect to your google calendar account  - redirect you to a browser page to sign in
# list out the next 10 events in your calendar
# uses the freebusy api to get busy time periods and generate free time periods from there
# the create_event method has 4 default challenge events and can create events into your gcal


from __future__ import print_function
import datetime
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/calendar']


def main():
    """Shows basic usage of the Google Calendar API.
    Prints the start and name of the next 10 events on the user's calendar.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('calendar', 'v3', credentials=creds)

    # Call the Calendar API
    now = datetime.datetime.utcnow().isoformat() + 'Z' # 'Z' indicates UTC time
    print('Getting the upcoming 10 events')
    events_result = service.events().list(calendarId='primary', timeMin=now,
                                        maxResults=10, singleEvents=True,
                                        orderBy='startTime').execute()
    events = events_result.get('items', [])

    if not events:
        print('No upcoming events found.')
    for event in events:
        start = event['start'].get('dateTime', event['start'].get('date'))
        print(start, event['summary'])
    
    # this gets the time busy from a calendar using freebusy API
    body = {
      "timeMin": '2021-01-16T20:34:11+00:00',
      "timeMax": '2021-01-16T23:34:11+00:00',
      "timeZone": 'US/Central',
      "items": [{"id": 'sophysun1924@gmail.com'}]
    }

    eventsResult = service.freebusy().query(body=body).execute()
    cal_dict = eventsResult[u'calendars']
    for cal_name in cal_dict:
        print(cal_name, cal_dict[cal_name])
    
    busy_time = [] # ignore first entry, second would be end time of the first busy period, then compare end with start to get free time
    free_time = []
    for timerange in cal_dict[cal_name]['busy']:
        print(timerange)
        start_time = (timerange['start'].split('T')[1].split('-')[0])
        end_time = (timerange['end'].split('T')[1].split('-')[0])
        busy_time.append(start_time)
        busy_time.append(end_time)

    print(busy_time)

    #getting periods of free time, ignore first, compare end to start
    # start time will not be equal end time because then gcal would see it as one busy block
    # easy algorithm for now: just get the end time in free-time
    for i in range(len(busy_time)):
        # odd entries are end times
        if i % 2 != 0:
            free_time.append(busy_time[i])
    
    print(free_time)

    return free_time

def create_event():
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)
    service = build('calendar', 'v3', credentials=creds)
    
    # max 4 events
    # currently everything is hard-coded
    # next step: chalnge the start time and end time to using free_time
    # probabaly not hard code the email account
    free_time = main()
    print(free_time)
    event1 = {
    'summary': 'Challenge #1',
    'location': 'home',
    'description': 'Are you up for this challenge?',
    'start': {
    'dateTime': '2021-01-16T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
    },
    'end': {
    'dateTime': '2021-01-16T09:30:00-07:00',
    'timeZone': 'America/Los_Angeles',
    },
    'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
    {'email': 'sophysun1924@gmail.com'}
    ],
    'reminders': {
    'useDefault': False,
    'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10},
    ],
    },
    }

    event2 = {
    'summary': 'Challenge #2',
    'location': 'window',
    'description': 'Are you up for this challenge?',
    'start': {
    'dateTime': '2021-01-16T11:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
    },
    'end': {
    'dateTime': '2021-01-16T11:30:00-07:00',
    'timeZone': 'America/Los_Angeles',
    },
    'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
    {'email': 'sophysun1924@gmail.com'}
    ],
    'reminders': {
    'useDefault': False,
    'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10},
    ],
    },
    }

    event3 = {
    'summary': 'Challenge #3',
    'location': 'desk',
    'description': 'Are you up for this challenge?',
    'start': {
    'dateTime': '2021-01-16T14:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
    },
    'end': {
    'dateTime': '2021-01-16T14:30:00-07:00',
    'timeZone': 'America/Los_Angeles',
    },
    'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
    {'email': 'sophysun1924@gmail.com'}
    ],
    'reminders': {
    'useDefault': False,
    'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10},
    ],
    },
    }

    event4 = {
    'summary': 'Challenge #4',
    'location': 'outside',
    'description': 'Are you up for this challenge?',
    'start': {
    'dateTime': '2021-01-16T18:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
    },
    'end': {
    'dateTime': '2021-01-16T18:30:00-07:00',
    'timeZone': 'America/Los_Angeles',
    },
    'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
    {'email': 'sophysun1924@gmail.com'}
    ],
    'reminders': {
    'useDefault': False,
    'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10},
    ],
    },
    }
    event1 = service.events().insert(calendarId='primary', body=event1).execute()
    event2 = service.events().insert(calendarId='primary', body=event2).execute()
    event3 = service.events().insert(calendarId='primary', body=event3).execute()
    event4 = service.events().insert(calendarId='primary', body=event4).execute()

    # print ('Event created: %s' % (event.get('htmlLink')))
    # for more than one challenge, do a for loop with the # of challenges they picked and do a string place holder for the number

if __name__ == '__main__':
    main()
    create_event()