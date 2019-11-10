from igramscraper.instagram import Instagram, Location
import accountdetails

instagram = Instagram()

instagram.with_credentials(accountdetails.username, accountdetails.password, 'cache/')
instagram.login()

#Getting an account by id
account = instagram.get_account('latheabusaid')

# test_medias = instagram.get_medias('latheabusaid', 5)
# for test_media in test_medias:
#     print(test_media.location_name)
#     print(test_media.location_id)
#     print(test_media)

# Location id from facebook
# location = instagram.get_location_by_id(1)
# print(location)

# medias = instagram.get_medias_by_location_id('12', 20)
# media = medias[0]
# print(media)

# account = media.owner
# Available fields
# print('Account info:')
# print('Id: ', account.identifier)
# print('Username: ', account.username)
# print('Full name: ', account.full_name)
# print('Biography: ', account.biography)
# print('Profile pic url: ', account.get_profile_pic_url_hd())
# print('External Url: ', account.external_url)
# print('Number of published posts: ', account.media_count)
# print('Number of followers: ', account.followed_by_count)
# print('Number of follows: ', account.follows_count)
# print('Is private: ', account.is_private)
# print('Is verified: ', account.is_verified)

# or simply for printing use
# print(account)