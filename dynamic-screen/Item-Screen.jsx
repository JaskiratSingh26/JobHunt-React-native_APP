import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import VerticalCard from '../cardSystem/VerticalCard'
import { useNavigation } from '@react-navigation/native';

const ItemScreen = () => {
  let [dataitems, setdataitems] = useState([])
  let [loading, setloading] = useState(false)
  const navigation = useNavigation();
  const route = useRoute()
  const { jobtype } = route.params
  console.log(jobtype)
  navigation.setOptions({ title: jobtype });

  // const dataitems = [
  //     {"apply_options": [Array], "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Il5z-_HU5PycTFHPdm9FDH0LpnBRh32lcHSs&s=0", "employer_name": "Aesop", "employer_website": "https://www.aesop.com", "job_apply_is_direct": false, "job_apply_link": "https://www.linkedin.com/jobs/view/store-manager-north-bridge-full-time-at-aesop-4146105268?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": [Array], "job_city": "Chicago", "job_country": "US", "job_description": "For over 35 years, Aesop has carefully cultivated an inspiring and inclusive environment in which our employees are supported and encouraged to thrive. As a global retail organization, we offer professional development and advancement opportunities to complement career goals and aspirations.", "job_employment_type": "Full-time", "job_employment_types": [Array], "job_google_link": "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8#vhid=vt%3D20/docid%3DqmzlhDce61MGLUwxAAAAAA%3D%3D&vssid=jobs-detail-viewer", "job_highlights": [Object], "job_id": "qmzlhDce61MGLUwxAAAAAA==", "job_is_remote": false, "job_latitude": 41.8781136, "job_location": "Chicago, IL", "job_longitude": -87.6297982, "job_max_salary": null, "job_min_salary": null, "job_onet_job_zone": "2", "job_onet_soc": "41101100", "job_posted_at": "12 hours ago", "job_posted_at_datetime_utc": "2025-02-07T20:00:00.000Z", "job_posted_at_timestamp": 1738958400, "job_publisher": "LinkedIn", "job_salary": null, "job_salary_period": null, "job_state": "Illinois", "job_title": "Store Manager | North Bridge | Full Time"},
  //     {"apply_options": [Array], "employer_logo": null, "employer_name": "Insure On The Spot", "employer_website": "http://www.insureonthespot.com/", "job_apply_is_direct": true, "job_apply_link": "https://www.indeed.com/viewjob?jk=091cd772921adc61&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": [Array], "job_city": "Chicago", "job_country": "US", "job_description": "Immediate Evening Time Satellite Position Open at our Elston Ave. Office located next to the DMV.", "job_employment_type": "Full-time", "job_employment_types": [Array], "job_google_link": "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8#vhid=vt%3D20/docid%3DpTzTrkw-_wFrDhY0AAAAAA%3D%3D&vssid=jobs-detail-viewer", "job_highlights": [Object], "job_id": "pTzTrkw-_wFrDhY0AAAAAA==", "job_is_remote": false, "job_latitude": 41.8781136, "job_location": "Chicago, IL", "job_longitude": -87.6297982, "job_max_salary": null, "job_min_salary": null, "job_onet_job_zone": "2", "job_onet_soc": "43902100", "job_posted_at": null, "job_posted_at_datetime_utc": null, "job_posted_at_timestamp": null, "job_publisher": "Indeed", "job_salary_period": "HOUR", "job_state": "Illinois", "job_title": "Full Time Processor - Data Entry - ((Satellite))"},
  //     {"apply_options": [Array], "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCtNgzMZroV2zi8YE8TmThvMN_Y-S076YVNZ6&s=0", "employer_name": "U.S. Bank", "employer_website": "http://www.usbank.com/", "job_apply_is_direct": false, "job_apply_link": "https://www.linkedin.com/jobs/view/trust-manager-at-u-s-bank-4145954889?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": [Array], "job_city": "Chicago", "job_country": "US", "job_description": "At U.S. Bank, we’re on a journey to do our best. Helping the customers and businesses we serve to make better and smarter financial decisions and enabling the communities we support to grow and succeed.", "job_employment_type": "Full-time", "job_employment_types": [Array], "job_google_link": "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8#vhid=vt%3D20/docid%3Deyv25soxl9bHZg3UAAAAAA%3D%3D&vssid=jobs-detail-viewer", "job_highlights": [Object], "job_id": "eyv25soxl9bHZg3UAAAAAA==", "job_is_remote": false, "job_latitude": 41.8781136, "job_location": "Chicago, IL", "job_longitude": -87.6297982, "job_max_salary": 120120, "job_min_salary": 92820, "job_onet_job_zone": "4", "job_onet_soc": "11303100", "job_posted_at": "15 hours ago", "job_posted_at_datetime_utc": "2025-02-07T17:00:00.000Z", "job_posted_at_timestamp": 1738947600, "job_publisher": "LinkedIn", "job_salary_period": "YEAR", "job_state": "Illinois", "job_title": "Trust Manager"},
  //     {"apply_options": [Array], "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VwgDAEQZsyRzoJDJW8GsSjDs5lXAZQRT93OS&s=0", "employer_name": "Raising Cane's", "employer_website": "http://www.raisingcanes.com/", "job_apply_is_direct": false, "job_apply_link": "https://jobs.raisingcanes.com/restaurant-crewmember/job/28783643?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": [Array], "job_city": "Chicago", "job_country": "US", "job_description": "Starting hiring pay: $16.5", "job_employment_type": "Full-time", "job_employment_types": [Array], "job_google_link": "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8#vhid=vt%3D20/docid%3DsBvS1OAuSwTU6ImlAAAAAA%3D%3D&vssid=jobs-detail-viewer", "job_highlights": [Object], "job_id": "sBvS1OAuSwTU6ImlAAAAAA==", "job_is_remote": false, "job_latitude": 41.8781136, "job_location": "Chicago, IL", "job_longitude": -87.6297982, "job_max_salary": null, "job_min_salary": null, "job_onet_job_zone": "1", "job_onet_soc": "35302100", "job_posted_at": "2 days ago", "job_posted_at_datetime_utc": "2025-02-06T00:00:00.000Z", "job_posted_at_timestamp": 1738800000, "job_publisher": "Raising Cane's Careers", "job_salary": null, "job_salary_period": null, "job_state": "Illinois", "job_title": "Restaurant Crewmember"},
  //     {"apply_options": [Array], "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMDDfrrdVo9uslWBzUxEQS5QrjMW2wtDNfmYi&s=0", "employer_name": "PNC", "employer_website": "http://www.pnc.com/", "job_apply_is_direct": false, "job_apply_link": "https://careers.pnc.com/global/en/job/R180522/Personal-Banker?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": [Array], "job_city": "Chicago", "job_country": "US", "job_description": "Position Overview", "job_employment_type": "Full-time", "job_employment_types": [Array], "job_google_link": "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8#vhid=vt%3D20/docid%3Dy2trzyrf7SoqXGxYAAAAAA%3D%3D&vssid=jobs-detail-viewer", "job_highlights": [Object], "job_id": "y2trzyrf7SoqXGxYAAAAAA==", "job_is_remote": false, "job_latitude": 41.8781136, "job_location": "Chicago, IL", "job_longitude": -87.6297982, "job_max_salary": null, "job_min_salary": null, "job_onet_job_zone": "4", "job_onet_soc": "13205200", "job_posted_at": null, "job_posted_at_datetime_utc": null, "job_posted_at_timestamp": null, "job_publisher": "PNC Careers", "job_salary": null, "job_salary_period": null, "job_state": "Illinois", "job_title": "Personal Banker"},
  //     {"apply_options": [Array], "employer_logo": null, "employer_name": "Verizon", "employer_website": "https://www.verizon.com", "job_apply_is_direct": false, "job_apply_link": "https://mycareer.verizon.com/jobs/r-1061286/retail-sales-associate/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": [Array], "job_city": "Chicago", "job_country": "US", "job_description": "When you join Verizon", "job_employment_type": "Full-time", "job_employment_types": [Array], "job_google_link": "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8#vhid=vt%3D20/docid%3DAq6rhBUUadXMua-PAAAAAA%3D%3D&vssid=jobs-detail-viewer", "job_highlights": [Object], "job_id": "Aq6rhBUUadXMua-PAAAAAA==", "job_is_remote": false, "job_latitude": 41.8781136, "job_location": "Chicago, IL", "job_longitude": -87.6297982, "job_max_salary": null, "job_min_salary": null, "job_onet_job_zone": "2", "job_onet_soc": "41203100", "job_posted_at": "5 days ago", "job_posted_at_datetime_utc": "2025-02-03T00:00:00.000Z", "job_posted_at_timestamp": 1738540800, "job_publisher": "Verizon Careers", "job_salary": null, "job_salary_period": null, "job_state": "Illinois", "job_title": "Retail Sales Associate"},
  //     {"apply_options": [Array], "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4n8G2HObcZ4eaNJ3TTQjrZGWHeypmAG-WY6fD&s=0", "employer_name": "Waterman Bank", "employer_website": "http://watermanbank.com/", "job_apply_is_direct": true, "job_apply_link": "https://www.indeed.com/viewjob?jk=ae2a2e11f1e20c7f&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": [Array], "job_city": "Chicago", "job_country": "US", "job_description": "The principal function of this position is to assist customers of the bank with all functions relating to retail banking.", "job_employment_type": "Full-time", "job_employment_types": [Array], "job_google_link": "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8#vhid=vt%3D20/docid%3DW_mnGyLfQtp9yHvfAAAAAA%3D%3D&vssid=jobs-detail-viewer", "job_highlights": [Object], "job_id": "W_mnGyLfQtp9yHvfAAAAAA==", "job_is_remote": false, "job_latitude": 41.8781136, "job_location": "Chicago, IL", "job_longitude": -87.6297982, "job_max_salary": null, "job_min_salary": null, "job_onet_job_zone": "4", "job_onet_soc": "13205200", "job_posted_at": null, "job_posted_at_datetime_utc": null, "job_posted_at_timestamp": null, "job_publisher": "Indeed", "job_salary": null, "job_salary_period": null, "job_state": "Illinois", "job_title": "Bank Teller / Universal Banker"},
  //     {"apply_options": [Array], "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugv4Nbrr45EEGgcbwDhKMrxvj6b6RJORNZK_o&s=0", "employer_name": "Life Time", "employer_website": "https://www.lifetime.life", "job_apply_is_direct": false, "job_apply_link": "https://careers.lifetime.life/job/R-129465/Operations-Team-Member-Overnight?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": [Array], "job_city": "Chicago", "job_country": "US", "job_description": "Position Summary", "job_employment_type": "Part-time", "job_employment_types": [Array], "job_google_link": "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8#vhid=vt%3D20/docid%3D4R9abK6Icx9eXsRdAAAAAA%3D%3D&vssid=jobs-detail-viewer", "job_highlights": [Object], "job_id": "4R9abK6Icx9eXsRdAAAAAA==", "job_is_remote": false, "job_latitude": 41.8781136, "job_location": "Chicago, IL", "job_longitude": -87.6297982, "job_max_salary": null, "job_min_salary": null, "job_onet_job_zone": null, "job_onet_soc": "39301900", "job_posted_at": "4 days ago", "job_posted_at_datetime_utc": "2025-02-04T00:00:00.000Z", "job_posted_at_timestamp": 1738627200, "job_publisher": "Life Time Jobs", "job_salary": null, "job_salary_period": null, "job_state": "Illinois", "job_title": "Operations Team Member-Overnight"},
  //     {"apply_options": [Array], "employer_logo": null, "employer_name": "Northwestern Memorial Hospital", "employer_website": null, "job_apply_is_direct": false, "job_apply_link": "https://jobs.nm.org/job/chicago/clinical-nurse-inpatient-dialysis-full-time-days-5k-sign-on-bonus/27763/70647591696?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": null, "job_city": "Chicago", "job_country": "US", "job_description": "Description", "job_employment_type": "Full-time", "job_employment_types": [Array], "job_google_link": "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8#vhid=vt%3D20/docid%3DdiAbPC8aHBIUirP4AAAAAA%3D%3D&vssid=jobs-detail-viewer", "job_highlights": [Object], "job_id": "diAbPC8aHBIUirP4AAAAAA==", "job_is_remote": false, "job_latitude": 41.8781136, "job_location": "Chicago, IL", "job_longitude": -87.6297982, "job_max_salary": null, "job_min_salary": null, "job_onet_job_zone": "3", "job_onet_soc": "29114100", "job_posted_at": null, "job_posted_at_datetime_utc": null, "job_posted_at_timestamp": null, "job_publisher": "Northwestern Medicine", "job_salary": null, "job_salary_period": null, "job_state": "Illinois", "job_title": "Clinical Nurse - Inpatient Dialysis Full-time  Days $5k Sign on Bonus"},
  //     {"apply_options": [Array], "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XliZk6E7D3inlTyWXQpUkwFfzZ_b449W6TXi&s=0", "employer_name": "City Colleges of Chicago", "employer_website": "http://www.ccc.edu/", "job_apply_is_direct": false, "job_apply_link": "https://www.adzuna.com/details/5039759951?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic", "job_benefits": [Array], "job_city": "Chicago", "job_country": "US", "job_description": "FULL TIME FACULTY (PHOTOGRAPHY)", "job_employment_type": "Full-time", "job_employment_types": [Array], "job_google_link": "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8#vhid=vt%3D20/docid%3D0RYgeZDIbG43-psuAAAAAA%3D%3D&vssid=jobs-detail-viewer", "job_highlights": [Object], "job_id": "0RYgeZDIbG43-psuAAAAAA==", "job_is_remote": false, "job_latitude": 41.8781136, "job_location": "Chicago, IL", "job_longitude": -87.6297982, "job_max_salary": null, "job_min_salary": null, "job_onet_job_zone": "3", "job_onet_soc": "27402100", "job_posted_at": "3 days ago", "job_posted_at_datetime_utc": "2025-02-05T00:00:00.000Z", "job_posted_at_timestamp": 1738713600, "job_publisher": "Adzuna", "job_salary": null, "job_salary_period": null, "job_state": "Illinois", "job_title": "FULL TIME FACULTY (PHOTOGRAPHY) Job at City Colleges of Chicago in Chicago"}
  //   ];
  async function fetchingdata() {

    setloading(true)
    const url = `https://jsearch.p.rapidapi.com/search?query=${jobtype}%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'c2f57d27e1mshc886441bdb2b492p15adebjsn0bc170c56a18',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.data);
      setdataitems(result.data)
      setloading(false)
    } catch (error) {
      console.error(error);
      setloading(false)
    }
  }
  useEffect(() => {
    fetchingdata()

  }, [jobtype])
  return (
    <View>

      {loading ? (


        <ActivityIndicator size="large" color="#0000ff" />
      ) : (


        <FlatList
          data={dataitems}
          renderItem={({ item }) => (
            <>

              <VerticalCard item={item} />
            </>
          )}
          keyExtractor={(item) => item.job_id}
        />
      )}

    </View>
  )
}

export default ItemScreen

const styles = StyleSheet.create({})