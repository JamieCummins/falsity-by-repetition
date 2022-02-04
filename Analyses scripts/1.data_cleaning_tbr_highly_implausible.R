##Is Earth a Perfect Square? Repetition Increases the Perceived Truth of Highly Implausible Statements
#Pre-registration here: https://osf.io/pe4g9/
##Data wrangling and cleaning
##Script by: Jeremy Bena and Doris Lacassagne

#Call (or install and call) packages we will use
library(pacman) 
p_load('tidyverse', 'psych') 

#read the raw data file
data = read.csv("data/data_tbr_highly_implausible_raw.csv")

data = data %>% filter(serious == 1) #41940-41760 = 180, so one ppt said they did not answer seriously - exclude them

#Retrieve the statements ppts saw in the exposure phase and keep only the variables of interest
data_exposure = data %>% 
  filter(sender == "interest_judgment" & count_exposure_trial < 8) %>%
  select(url.srid, condition, sender, response, statement_exposure, count_exposure_trial, serious)

#Identify which are the repeated statements in each counterbalancing condition
old_A = data_exposure %>% filter(condition=="A")
old_B = data_exposure %>% filter(condition == "B")

#Retrieve the statements and responses from the test phase, and keep only the variables of interest
data_test = data %>% 
  filter(sender == "slider_trial") %>%
  select(url.srid, condition, sender, statement_test, count_test_trial, slider_truth_response, serious)

#In the first counterbalancing condition (A), identify the repeated and new statements
data_test_A = data_test %>% filter(condition == "A")
data_test_A$repetition = ifelse(data_test_A$statement_test %in% old_A$statement_exposure,
                                "repeated","new")

#In the second counterbalancing condition (B), identify the repeated and new statements
data_test_B = data_test %>% filter(condition == "B")
data_test_B$repetition = ifelse(data_test_B$statement_test %in% old_B$statement_exposure,
                                "repeated","new")

#Put the two counterbalancing conditions in only one data frame - we now have the "repetition" factor
data_test_final = rbind(data_test_A, data_test_B)

#Responses on the slider as numeric
data_test_final$slider_truth_response = as.numeric(data_test_final$slider_truth_response)

#Rescale responses on the slider: rather than -50;50, use 0;100
data_test_final$slider_truth_response = data_test_final$slider_truth_response

#write the data frame
write.csv(data_test_final, "data/data_analyses_tbr_highly_implausible.csv")

